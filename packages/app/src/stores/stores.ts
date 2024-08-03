import type { GetAccountReturnType } from '@wagmi/core';
import {  writable } from 'svelte/store';

export const account = writable<GetAccountReturnType>();

import type { ScreenMode } from '$types';

export const screenSize = writable<number>(0);
export const screen = writable<ScreenMode>('desktop');
