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
  events.update((currentEvents) => {
    const id = currentEvents.length ? Math.max(...currentEvents.map((e) => e.id)) + 1 : 1;
    return [...currentEvents, { ...event, id }];
  });

  // Create new Event Attestation
  const data = { title: event.title, description: event.description };

  await newEventAttestation(data);
};

export const getEvent = (eventId: number) => {
  return get(events).find((event) => event.id === eventId);
};

export const getEvents = () => {
  return get(events);
};
