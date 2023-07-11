import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { logger } from "@/common/utilities/logger";
import { NotFoundError } from "./credentialStorage";

export function sendErrorResponse(error: unknown) {
  logger.error(error);

  if (error instanceof NotFoundError) {
    return new NextResponse(JSON.stringify(error), { status: StatusCodes.NOT_FOUND })
  } else {
    return new NextResponse(JSON.stringify(error), { status: StatusCodes.INTERNAL_SERVER_ERROR })
  }
}
