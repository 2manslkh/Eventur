<script lang="ts">
  import { Icon } from '$components/Icons';
  import type { Event } from '$types';

  export let event: Event;
</script>

<a href={`/events/${event.id}`} class="block transition-transform duration-200 ease-in-out hover:scale-[1.01]">
  <div class="flex gap-6 bg-white rounded-lg p-4 mb-4 transition-shadow duration-200 ease-in-out hover:shadow-lg">
    {#if event.image}
      <img src={event.image} alt={event.title} class="w-full rounded mt-2" />
    {:else}
      <img src="https://via.placeholder.com/128x128" alt="Placeholder" class="rounded size-32" />
    {/if}
    <div class="flex flex-col w-full">
      <div class="text-sm text-gray-400">{event.startTime} - {event.endTime}</div>
      <h3 class="text-lg font-semibold my-2">{event.title}</h3>
      <div class="text-sm text-gray-400">By {event.organizer}</div>
      <div class="flex items-center gap-2">
        <Icon type="location" class="size-4 text-gray-400" vHeight={16} vWidth={16} />
        <div class="text-sm text-gray-400">{event.location}</div>
      </div>
      <div
        class="w-fit px-2 py-1 rounded text-xs"
        class:bg-blue-600={event.status === 'Invited'}
        class:bg-orange-500={event.status === 'Pending'}
        class:bg-green-500={event.status === 'Going'}>
        {event.status}
      </div>
      {#if event.attendees}
        <div class="mt-2 text-sm">
          <!-- Implement attendee avatars here -->
          {event.attendees} attendees
        </div>
      {/if}
    </div>
  </div>
</a>
