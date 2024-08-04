// Types

import type { FrameMeta } from '$libs/frames';
import type { Actions } from './$types';

// Actions

export const actions: Actions = {
  demos: async ({ url, locals: { frameSignaturePacket } }) => {
    const buttons = [
      {
        label: 'RSVP No',
        action: 'post',
        targetUrl: '/events/[id]',
      },
      {
        label: 'RSVP No',
        action: 'post',
        targetUrl: '/events/[id]',
      },
    ];

    return {
      frame: {
        image: {
          url: '.',
          aspectRatio: '1.91:1',
        },
        buttons: [...buttons],
      } as FrameMeta,
    };
  },
};
