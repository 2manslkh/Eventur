import { gql } from '@apollo/client/core';

export const EVENTUR_EVENTS = gql`
  query Eventur($where: SchemaWhereInput) {
    schemata(where: $where) {
      attestations {
        id
        decodedDataJson
        schemaId
      }
      time
    }
  }
`;

export const EVENTUR_EVENT = gql`
  query EventurOne($where: SchemaWhereInput, $where2: AttestationWhereInput) {
    schemata(where: $where) {
      attestations(where: $where2) {
        id
        decodedDataJson
        schemaId
      }
      time
    }
  }
`;

export const EVENTUR_RSVP = gql`
  query EventurRSVPs($where: AttestationWhereInput) {
    attestations(where: $where) {
      refUID
      attester
      decodedDataJson
    }
  }
`;
