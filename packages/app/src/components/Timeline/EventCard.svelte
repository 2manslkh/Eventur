<script lang="ts">
  import { Icon } from '$components/Icons';
  import type { Event } from '$types';

  export let event: Event;
</script>

<a href={`/events/${event.id}`} class="block transition-transform duration-200 ease-in-out hover:scale-[1.01]">
  <div
    class="flex gap-6 bg-primary-background-elevated rounded-lg p-4 mb-4 transition-shadow duration-200 ease-in-out hover:shadow-lg">
    {#if event.image}
      <img src={event.image} alt={event.title} class="w-full rounded mt-2" />
    {:else}
      <img src="https://via.placeholder.com/128x128" alt="Placeholder" class="rounded size-32" />
    {/if}
    <div class="flex flex-col w-full">
      <div class="text-sm text-secondary-content-light">
        {new Date(event.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
        {#if event.endTime && !isNaN(new Date(event.endTime).getTime())}
          - {new Date(event.endTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
        {/if}
      </div>
      <h3 class="text-lg font-semibold my-2">{event.title}</h3>
      <div class="text-sm text-secondary-content-light">Hosted by: {event.organizer}</div>
      <div class="flex items-center gap-2">
        <Icon type="location" class="size-4 text-secondary-content-light" vHeight={16} vWidth={16} />
        <div class="text-sm text-secondary-content-light">{event.location}</div>
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
