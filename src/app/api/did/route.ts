import { sendErrorResponse } from "@/common/utilities/errorResponse";
import { initKilt } from "@/common/utilities/initKilt";
import { logger } from "@/common/utilities/logger";
import { sessionMiddleware } from "@/common/utilities/sessionStorage";
import { BalanceUtils, ConfigService, Did } from "@kiltprotocol/sdk-js";
import { NextResponse } from "next/server";

export async function GET(request: Request, aaa: any) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const q: any = searchParams.get("q");

    await initKilt()

    await sessionMiddleware(request);

    const api = ConfigService.get('api');
    const balances = await api.query.system.account(q)
    const free = balances.data.free;
    const balance = BalanceUtils.formatKiltBalance(free);

    return NextResponse.json({
      balance
    })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
