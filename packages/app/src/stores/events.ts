import { get, writable } from 'svelte/store';
import type { Event } from '$types';

// Update the Event type to include coverImageUrl and ticketImageUrl
type EventWithoutId = Omit<Event, 'id'> & {
  coverImageUrl?: string;
  ticketImageUrl?: string;
};

export const events = writable<Event[]>([]);

export const createEvent = (event: EventWithoutId) => {
  events.update((currentEvents) => {
    const id = currentEvents.length ? Math.max(...currentEvents.map((e) => e.id)) + 1 : 1;
    return [...currentEvents, { ...event, id }];
  });
};

export const getEvent = (eventId: number) => {
  return get(events).find((event) => event.id === eventId);
};

export const getEvents = () => {
  return get(events);
};
