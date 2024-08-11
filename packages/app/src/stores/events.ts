import { get, writable } from 'svelte/store';
import type { Event } from '$types';
import { newAttestation, newEventAttestation } from '$libs/eas';

// Update the Event type to include coverImageUrl and ticketImageUrl
type EventWithoutId = Omit<Event, 'id'> & {
  coverImageUrl?: string;
  ticketImageUrl?: string;
};

export const events = writable<Event[]>([]);

export const createEvent = async (event: EventWithoutId) => {
  console.log('🚀 | createEvent | event:', event);
  events.update((currentEvents) => {
    const id = currentEvents.length ? Math.max(...currentEvents.map((e) => e.id)) + 1 : 1;
    return [...currentEvents, { ...event, id }];
  });

  // Create new Event Attestation

  const data = [
    { type: 'string', name: 'name', value: event.title },
    { type: 'string', name: 'description', value: event.description }, // CID
    { type: 'string', name: 'location', value: event.location },
    { type: 'uint64', name: 'startTime', value: Math.floor(new Date(event.startTime).getTime() / 1000) },
    { type: 'uint64', name: 'endTime', value: Math.floor(new Date(event.startTime).getTime() / 1000) },
    { type: 'uint32', name: 'capacity', value: Number(event.capacity) },
  ];
  console.log('🚀 | createEvent | data:', data);

  // Get Event scchema
  await newEventAttestation(data);
};

export const getEvent = (eventId: number) => {
  return get(events).find((event) => event.id === eventId);
};

export const getEvents = () => {
  return get(events);
};
