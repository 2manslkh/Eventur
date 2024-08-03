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
  let name = '';
  let date = '';
  let location = '';
  let description = '';
  let capacity = 0;
  let coverImage: File | null = null;
  let ticketImage: File | null = null;

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
    if (!name.trim()) {
      alert('Event name is required');
      return;
    }

    if (!date) {
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

    // if (!coverImage) {
    //   alert('Cover image is required');
    //   return;
    // }

    // if (!ticketImage) {
    //   alert('Ticket image is required');
    //   return;
    // }

    const coverImageUrl = coverImage ? await uploadImage(coverImage) : '';
    const ticketImageUrl = ticketImage ? await uploadImage(ticketImage) : '';

    createEvent({ name, date, location, description, capacity, coverImageUrl, ticketImageUrl });
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
    name = randomEventName();
    date = randomDateTime();
    location = randomEventLocation();
    description = randomEventDescription();
    capacity = randomEventCapacity();
  };
</script>

<button
  type="button"
  on:click={handleRandom}
  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
  Randomize Event
</button>

<form on:submit|preventDefault={handleSubmit} class="p-4 max-w-lg mx-auto bg-white rounded shadow-md">
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Event Name</label>
    <input
      type="text"
      bind:value={name}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Date</label>
    <input
      type="date"
      bind:value={date}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Location</label>
    <input
      type="text"
      bind:value={location}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Description</label>
    <textarea
      bind:value={description}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required></textarea>
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Capacity</label>
    <input
      type="number"
      bind:value={capacity}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Cover Image</label>
    <input
      type="file"
      accept="image/*"
      on:change={handleCoverImageChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div class="mb-4">
    <label class="block text-sm font-bold mb-2">Ticket Image</label>
    <input
      type="file"
      accept="image/*"
      on:change={handleTicketImageChange}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <button
    type="submit"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >Create Event</button>
</form>
