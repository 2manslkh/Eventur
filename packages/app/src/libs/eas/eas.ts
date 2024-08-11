import { getEvents as getEventsStore, getEvent as getEventStore } from '$stores/events';

import type { Event } from '$types';

export const SCHEMA_REGISTRY_CONTRACT_ADDRESS = '0x4200000000000000000000000000000000000020';
export const EAS_CONTRACT_ADDRESS = '0x4200000000000000000000000000000000000021';
export const NAME_A_SCHEMA_UID = '0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc';
export const EVENTUR_EVENT_UID = '0xdf7e7eca71487864e3f48b26eff5e9a12fca1795bb4732aa21b43e6430a1eef3';
export const EVENTUR_RSVP_UID = '0xbdf3351d0ad2a825e591fe1b29d35211c4347712f06429ddfe4a3c995f188d40';
export function getEvents(): Event[] {
  // Get from store as mock
  return getEventsStore();

  // Get Events from Graphql
}

export function getEvent(eventId: number) {
  // Get from store as mock
  // If not in store, fetch from API
  // If in store, return from store

  return getEventStore(eventId);
}
