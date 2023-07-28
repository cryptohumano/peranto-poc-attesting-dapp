import { getCredential } from '@/common/utilities/credentialStorage'
import * as Kilt from '@kiltprotocol/sdk-js'
import { NextResponse } from 'next/server'

function getChallenge(): string {
  return Kilt.Utils.UUID.generate()
}

// Verifies validity, ownership & attestation.
async function verifyPresentation(
  presentation: Kilt.ICredentialPresentation,
  challenge: string,
  trustedAttesterUris: Kilt.DidUri[]
): Promise<boolean> {
  try {
    const { revoked, attester } = await Kilt.Credential.verifyPresentation(
      presentation,
      { challenge }
    )

    if (revoked) {
      return false
    }
    // Returns true if no trusted attester URI is provided or, if it is, if it matches the one that issued the presented credential.
    return trustedAttesterUris.includes(attester)
  } catch {
    return false
  }
}

export async function createPresentation(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  challenge?: string
): Promise<Kilt.ICredentialPresentation> {
  // Create the presentation from credential, DID and challenge.
  return Kilt.Credential.createPresentation({
    credential,
    signCallback,
    challenge
  })
}

export async function verificationFlow(
  credential: Kilt.ICredential,
  signCallback: Kilt.SignCallback,
  trustedAttesterUris: Kilt.DidUri[] = []
) {
  // Verifier sends a unique challenge to the claimer 🕊
  const challenge = getChallenge()

  // Create a presentation and send it to the verifier 🕊
  const presentation = await createPresentation(
    credential,
    signCallback,
    challenge
  )

  // The verifier checks the presentation.
  const isValid = await verifyPresentation(
    presentation,
    challenge,
    trustedAttesterUris
  )

  if (isValid) {
    console.log('Verification successful! You are allowed to enter the club 🎉')
  } else {
    console.log('Verification failed! 🚫')
  }
}

export async function GET(req: Request) {
  const { credentialId } = await req.json()

  const credential = getCredential(credentialId)

  return NextResponse.json({})
}
