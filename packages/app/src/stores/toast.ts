import type { Toast } from '$types';
import { writable } from 'svelte/store';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: Toast) => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);

  // Setup some sensible defaults for a toast.
  const defaults: Toast = {
    id,
    type: 'info',
    dismissible: true,
    timeout: 3000,
    message: 'NO MESSAGE SET',
  };

  // Push the toast to the top of the list of toasts
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout) {
    setTimeout(() => dismissToast(id), toast.timeout);
    return;
  }

  if (toast.dismissible) {
    setTimeout(() => dismissToast(id), defaults.timeout);
  }
};

export const dismissToast = (id: number) => {
  toasts.update((all) => all.filter((t) => t.id !== id));
};
