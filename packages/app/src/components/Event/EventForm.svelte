<script lang="ts">
  import { createEvent } from '../../stores/events';
  import { goto } from '$app/navigation';
  import {
    randomEventName,
    randomDateTime,
    randomEventLocation,
    randomEventDescription,
    randomEventCapacity,
  } from '$libs/random';
  import { Editor } from '@tiptap/core';
  import { onMount } from 'svelte';
  import Heading from '@tiptap/extension-heading';
  import StarterKit from '@tiptap/starter-kit';

  let title = '';
  let startTime: string = '';
  let endTime: string = '';
  let location = '';
  let description = '';
  let capacity = 0;
  let coverImage: File | null = null;
  let ticketImage: File | null = null;
  let status: 'Pending' | 'Invited' | 'Going' = 'Pending';
  let organizer = '';
  let editorInstance: Editor;
  let element: HTMLElement;

  onMount(() => {
    editorInstance = new Editor({
      element: element,
      extensions: [
        StarterKit,
        Heading.configure({
          HTMLAttributes: {
            class: 'text-left',
          },
        }),
      ],
      content: '<h2>Markdown is supported 🌍️</h2>',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editorInstance = editorInstance;
      },
    });
  });

  const handleCoverImageChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    coverImage = target.files?.[0] || null;
  };

  const handleTicketImageChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    ticketImage = target.files?.[0] || null;
  };

  const handleSubmit = async () => {
    // Validate form entries
    if (!title.trim()) {
      alert('Event name is required');
      return;
    }

    if (!startTime) {
      alert('Date is required');
      return;
    }

    if (!location.trim()) {
      alert('Location is required');
      return;
    }

    if (!description.trim()) {
      alert('Description is required');
      return;
    }

    if (capacity <= 0) {
      alert('Capacity must be a positive number');
      return;
    }

    const coverImageUrl = coverImage ? await uploadImage(coverImage) : '';
    const ticketImageUrl = ticketImage ? await uploadImage(ticketImage) : '';

    await createEvent({
      title,
      startTime,
      endTime,
      location,
      description: editorInstance.getHTML(),
      capacity,
      coverImageUrl,
      ticketImageUrl,
      status,
      organizer,
    });
    goto('/events');
  };

  const uploadImage = async (file: File): Promise<string> => {
    // Implement the logic to upload the image to your storage server or service
    // and return the URL of the uploaded image
    // This is a placeholder implementation
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await response.json();
    return data.url;
  };

  const handleRandom = () => {
    title = randomEventName();
    startTime = randomDateTime();
    location = randomEventLocation();
    description = randomEventDescription();
    capacity = randomEventCapacity();
  };
</script>

<button
  type="button"
  on:click={handleRandom}
  class="bg-primary-button font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
  Randomize Event
</button>

<form on:submit|preventDefault={handleSubmit} class="p-4 max-w-lg w-full mx-auto rounded shadow-md">
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Event Name</label>
    <input
      type="text"
      bind:value={title}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-primary-background-elevated"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Date</label>
    <input
      type="datetime-local"
      bind:value={startTime}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-primary-background-elevated"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Location</label>
    <input
      type="text"
      bind:value={location}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-primary-background-elevated"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Description</label>
    <div class="bg-primary-background-elevated text-left p-2 h-[500px]" bind:this={element} />
    <!-- <TipTap editor={editorInstance} /> -->
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Capacity</label>
    <input
      type="number"
      bind:value={capacity}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-primary-background-elevated"
      required />
  </div>
  <!-- <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Cover Image</label>
    <input
      type="file"
      accept="image/*"
      on:change={handleCoverImageChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Ticket Image</label>
    <input
      type="file"
      accept="image/*"
      on:change={handleTicketImageChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
  </div> -->
  <button type="submit" class="bg-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >Create Event</button>
</form>
