import { EVENTUR_EVENT_UID, EVENTUR_RSVP_UID } from './eas';
import { EAS, SchemaEncoder, SchemaRegistry, ZERO_ADDRESS, ZERO_BYTES32 } from '@ethereum-attestation-service/eas-sdk';
import { EAS_CONTRACT_ADDRESS, SCHEMA_REGISTRY_CONTRACT_ADDRESS } from '.';
import type { AttestationBlocks } from './types';
import { getEthersSigner } from './ethersWrapper';
import { wagmiConfig } from '$libs/wagmi';

export async function newAttestation(schemaUID: string, data: AttestationBlocks[], refUID?: string): Promise<string> {
  const eas = new EAS(EAS_CONTRACT_ADDRESS);
  const signer = await getEthersSigner(wagmiConfig);
  eas.connect(signer);
  const schemaRegistry = new SchemaRegistry(SCHEMA_REGISTRY_CONTRACT_ADDRESS);
  schemaRegistry.connect(signer);
  const schemaRecord = await schemaRegistry.getSchema({ uid: schemaUID });
  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(schemaRecord.schema);
  const encodedData = schemaEncoder.encodeData(data);

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: ZERO_ADDRESS,
      expirationTime: 0n,
      revocable: true, // Be aware that if your schema is not revocable, this MUST be false
      data: encodedData,
      refUID: refUID || ZERO_BYTES32,
    },
  });

  const newAttestationUID = await tx.wait();
  console.log('New attestation UID:', newAttestationUID);
  return newAttestationUID;
}

export async function newEventAttestation(data: AttestationBlocks[]): Promise<string> {
  return await newAttestation(EVENTUR_EVENT_UID, data);
}
// eventUID is the reference
export async function newRSVPAttestation(data: AttestationBlocks[], eventUID: string): Promise<string> {
  return await newAttestation(EVENTUR_RSVP_UID, data, eventUID);
}
