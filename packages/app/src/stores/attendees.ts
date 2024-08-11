import { writable } from 'svelte/store';
import type { Attendee, AttendeeList } from '$types';
import { newRSVPAttestation } from '$libs/eas';

export const attendees = writable<AttendeeList>({});

export const registerAttendee = async (attendee: Attendee, eventId: string) => {
  const isAttending = attendee.rsvpStatus == 'yes';
  const data = [{ type: 'bool', name: 'rsvp', value: isAttending }];

  // Get Event schema and create attestation
  const uid = await newRSVPAttestation(data, eventId);

  attendees.update((currentAttendees) => {
    // Find attendee list using eventId, or create a new one if it doesn't exist
    const eventAttendees = currentAttendees[eventId] || [];

    // Push attendee to list
    eventAttendees.push(attendee);

    // Update attendees store
    return { ...currentAttendees, [eventId]: eventAttendees };
  });

  return uid;
};
