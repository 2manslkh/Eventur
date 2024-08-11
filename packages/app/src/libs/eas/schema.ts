import { SchemaRegistry, getSchemaUID } from '@ethereum-attestation-service/eas-sdk';
import { getEthersSigner } from './ethersWrapper';
import { wagmiConfig } from '$libs/wagmi';
import { NAME_A_SCHEMA_UID, SCHEMA_REGISTRY_CONTRACT_ADDRESS } from '.';
import type { SchemaBlocks } from './types';
import { newAttestation } from './attest';
import { switchChain } from '@wagmi/core';

export function buildSchema(schema: SchemaBlocks[]): string {
  return schema.map((block) => `${block.type} ${block.name}`).join(', ');
}

export async function addSchema(schema: string) {
  // Switch to Base Sepolia
  await switchChain(wagmiConfig, { chainId: 84532 });

  const signer = await getEthersSigner(wagmiConfig);

  const schemaRegistry = new SchemaRegistry(SCHEMA_REGISTRY_CONTRACT_ADDRESS);

  schemaRegistry.connect(signer);
  const resolverAddress = '0x0000000000000000000000000000000000000000'; // Sepolia 0.26
  const revocable = true;

  const transaction = await schemaRegistry.register({
    schema,
    resolverAddress,
    revocable,
  });
  // Optional: Wait for transaction to be validated
  await transaction.wait();
  const uid = getSchemaUID(schema, resolverAddress, revocable);
  return uid;
}

export async function addEventSchema() {
  const schemaBlocks: SchemaBlocks[] = [
    { type: 'string', name: 'name' },
    { type: 'string', name: 'description' }, // CID
    { type: 'string', name: 'location' },
    { type: 'uint64', name: 'startTime' },
    { type: 'uint64', name: 'endTime' },
    { type: 'uint32', name: 'capacity' },
  ];

  const schemaString = buildSchema(schemaBlocks);
  const uid = await addSchema(schemaString);
  // Name the Schema
  const data = [
    {
      type: 'bytes32',
      name: 'schemaId',
      value: uid,
    },
    {
      type: 'string',
      name: 'name',
      value: 'EventurEvent',
    },
  ];
  await newAttestation(NAME_A_SCHEMA_UID, data);
}

export async function addRSVPSchema() {
  const schemaBlocks: SchemaBlocks[] = [{ type: 'bool', name: 'rsvp' }];
  const schemaString = buildSchema(schemaBlocks);
  const uid = await addSchema(schemaString);
  // Name the Schema
  const data = [
    {
      type: 'bytes32',
      name: 'schemaId',
      value: uid,
    },
    {
      type: 'string',
      name: 'name',
      value: 'EventurRSVP',
    },
  ];
  await newAttestation(NAME_A_SCHEMA_UID, data);
}
