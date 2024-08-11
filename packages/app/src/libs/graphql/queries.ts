import { EVENTUR_EVENT_UID } from './../eas/eas';
import { gql } from '@apollo/client/core';

export const EVENTUR_EVENTS = gql`
  query Eventur {
    schema(where: { id: "${EVENTUR_EVENT_UID}" }) {
      schema
      attestations {
        id
        decodedDataJson
        schemaId
      }
      time
    }
  }
`;
