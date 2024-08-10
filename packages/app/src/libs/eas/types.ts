import type { SchemaValue } from '@ethereum-attestation-service/eas-sdk';

export type SchemaBlocks = {
  type: string;
  name: string;
};

export type AttestationBlocks = {
  name: string;
  type: string;
  value: SchemaValue;
};
