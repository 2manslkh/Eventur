export interface Toast {
  id?: number;
  type: 'info' | 'success' | 'error' | 'copy' | 'sad';
  dismissible?: boolean;
  timeout?: number;
  message?: string;
  txnHash?: string;
}

export type ScreenMode = 'desktop' | 'mobile';

export const defaultEvent: Event = {
  id: '0',
  title: '',
  startTime: '',
  endTime: '',
  organizer: '',
  location: '',
  status: 'Pending',
  capacity: 0,
  description: '',
};

export interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  organizer: string;
  location: string;
  status: 'Invited' | 'Pending' | 'Going';
  attendees?: number;
  image?: string;
  capacity: number;
  description: string;
}

export type RSVPStatus = 'yes' | 'no' | 'pending';

type EventID = string;

export type AttendeeList = Record<EventID, Attendee[]>;

export interface Attendee {
  address: string;
  rsvpStatus: RSVPStatus;
}
