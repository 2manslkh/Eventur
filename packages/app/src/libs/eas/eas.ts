import { getEvents as getEventsStore, getEvent as getEventStore } from '$stores/events';

import type { Event } from '$types';

export function getEvents(): Event[] {
  // Get from store as mock

  return getEventsStore();
}

export function getEvent(eventId: number) {
  // Get from store as mock
  // If not in store, fetch from API
  // If in store, return from store

  return getEventStore(eventId);
}
