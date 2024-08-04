import { writable } from 'svelte/store';
import type { Attendee } from '$types';

const attendees = writable<Attendee[]>([]);

export const registerAttendee = (attendee: Omit<Attendee, 'id'>) => {
  attendees.update((currentAttendees) => {
    const id = currentAttendees.length ? Math.max(...currentAttendees.map((a) => a.id)) + 1 : 1;
    return [...currentAttendees, { ...attendee, id }];
  });
};

export default attendees;
