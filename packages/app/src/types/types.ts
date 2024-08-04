export interface Toast {
  id?: number;
  type: 'info' | 'success' | 'error' | 'copy' | 'sad';
  dismissible?: boolean;
  timeout?: number;
  message?: string;
  txnHash?: string;
}

export type ScreenMode = 'desktop' | 'mobile';

export interface Event {
  id: number;
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

export interface Attendee {
  id: number;
  address: string;
  rsvpStatus: RSVPStatus;
  eventId: number;
}
