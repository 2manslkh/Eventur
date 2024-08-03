// Tyoes

// Data
import type { FrameMeta } from '$libs/frames';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const parentData = await parent();

  return {
    ...parentData,

    frame: {
      buttons: [
        parentData.frame.buttons[0],
        {
          label: 'Casts',
          action: 'post',
          targetUrl: './casts',
        },
      ],
    } as FrameMeta,
  };
};
