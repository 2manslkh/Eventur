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
  name: string;
  date: string;
  location: string;
  description: string;
  capacity: number;
}

export type RSVPStatus = 'yes' | 'no' | 'pending';

export interface Attendee {
  id: number;
  address: string;
  rsvpStatus: RSVPStatus;
  eventId: number;
}
