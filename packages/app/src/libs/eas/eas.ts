import { graphqlClient } from '$libs/graphql/client';
import { EVENTUR_EVENT, EVENTUR_EVENTS, EVENTUR_RSVP } from '$libs/graphql/queries';
import { events } from '$stores/events';
import { defaultEvent, type Attendee, type Event } from '$types';

interface DecodedField {
  name: string;
  type: string;
  signature: string;
  value: {
    name: string;
    type: string;
    value: string | { type: string; hex: string };
  };
}

interface Attestation {
  id: string;
  attester: string;
  decodedDataJson: string;
  schemaId: string;
}

export const SCHEMA_REGISTRY_CONTRACT_ADDRESS = '0x4200000000000000000000000000000000000020';
export const EAS_CONTRACT_ADDRESS = '0x4200000000000000000000000000000000000021';
export const NAME_A_SCHEMA_UID = '0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc';
export const EVENTUR_EVENT_UID = '0xdf7e7eca71487864e3f48b26eff5e9a12fca1795bb4732aa21b43e6430a1eef3';
export const EVENTUR_RSVP_UID = '0xbdf3351d0ad2a825e591fe1b29d35211c4347712f06429ddfe4a3c995f188d40';

export async function getEvents(): Promise<void> {
  const response = await graphqlClient.query({
    query: EVENTUR_EVENTS,
    variables: {
      where: {
        id: {
          equals: '0xdf7e7eca71487864e3f48b26eff5e9a12fca1795bb4732aa21b43e6430a1eef3',
        },
      },
    },
  });

  if (response.data?.schemata[0].attestations) {
    const parsedEvents: Event[] = response.data.schemata[0].attestations.map((attestation: Attestation) => {
      const decodedData: DecodedField[] = JSON.parse(attestation.decodedDataJson);
      const eventData: Record<string, unknown> = {};

      decodedData.forEach((field: DecodedField) => {
        if (field.name === 'startTime' || field.name === 'endTime') {
          eventData[field.name] = new Date(
            parseInt((field.value.value as { hex: string }).hex, 16) * 1000,
          ).toISOString();
        } else if (field.name === 'capacity') {
          eventData[field.name] = parseInt(field.value.value as string, 10);
        } else {
          eventData[field.name] = field.value.value;
        }
      });

      return {
        ...defaultEvent,
        id: attestation.id,
        title: eventData['name'] as string,
        startTime: eventData['startTime'] as string,
        endTime: eventData['endTime'] as string,
        organizer: '', // This information is not provided in the attestation
        location: eventData['location'] as string,
        status: 'Pending', // Default status, as it's not provided in the attestation
        capacity: eventData['capacity'] as number,
        description: eventData['description'] as string,
        // Optional fields
      };
    });
    events.set(parsedEvents);
  }
}

export async function getRSVPs(eventId: string): Promise<Attendee[]> {
  const response = await graphqlClient.query({
    query: EVENTUR_RSVP,
    variables: {
      where: {
        refUID: {
          equals: eventId,
        },
      },
    },
  });

  if (response.data?.attestations) {
    const parsedEvents: Attendee[] = response.data.attestations.map((attestation: Attestation) => {
      const decodedData: DecodedField[] = JSON.parse(attestation.decodedDataJson);
      console.log('🚀 | decodedData:', decodedData);
      const eventData: Record<string, unknown> = {};

      decodedData.forEach((field: DecodedField) => {
        if (field.name === 'rsvp') {
          eventData['rsvp'] = field.value;
        }
      });

      return {
        address: attestation.attester,
        rsvpStatus: eventData['rsvp'] ? 'yes' : 'no',
      };
    });
    return parsedEvents;
  }

  return [];
}

export async function getSingleEvent(eventId: string): Promise<Event> {
  const response = await graphqlClient.query({
    query: EVENTUR_EVENT,
    variables: {
      where: {
        id: {
          equals: '0xdf7e7eca71487864e3f48b26eff5e9a12fca1795bb4732aa21b43e6430a1eef3',
        },
      },
      where2: {
        id: {
          equals: eventId,
        },
      },
    },
  });
  console.log('🚀 | getSingleEvent | response:', response);
  let out: Event;

  if (response.data?.schemata[0].attestations) {
    const parsedEvents: Event[] = response.data.schemata[0].attestations.map((attestation: Attestation) => {
      const decodedData: DecodedField[] = JSON.parse(attestation.decodedDataJson);
      const eventData: Record<string, unknown> = {};

      decodedData.forEach((field: DecodedField) => {
        if (field.name === 'startTime' || field.name === 'endTime') {
          eventData[field.name] = new Date(
            parseInt((field.value.value as { hex: string }).hex, 16) * 1000,
          ).toISOString();
        } else if (field.name === 'capacity') {
          eventData[field.name] = parseInt(field.value.value as string, 10);
        } else {
          eventData[field.name] = field.value.value;
        }
      });

      return {
        ...defaultEvent,
        id: attestation.id,
        title: eventData['name'] as string,
        startTime: eventData['startTime'] as string,
        endTime: eventData['endTime'] as string,
        organizer: '', // This information is not provided in the attestation
        location: eventData['location'] as string,
        status: 'Pending', // Default status, as it's not provided in the attestation
        capacity: eventData['capacity'] as number,
        description: eventData['description'] as string,
        // Optional fields
      };
    });
    if (parsedEvents[0]) {
      out = parsedEvents[0];
      return out;
    }
  }
  throw new Error('');
}
