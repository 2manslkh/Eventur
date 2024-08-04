<script lang="ts">
  import { groupEventsByDate } from '$libs/util/groupEventsByDate';
  import type { Event } from '$types';

  export let events: Event[];
  export let date: Date;

  $: groupedEvents = groupEventsByDate(events, date) as Record<string, Event[]>;
</script>

<div class="flex w-full">
  {#each Object.entries(groupedEvents) as [eventDate, dateEvents]}
    <div class="flex w-full mb-8">
      <div class="w-24 pr-5">
        <div class="sticky top-5 text-right">
          <span class="text-2xl font-bold">{new Date(eventDate).getDate()}</span>
          <span class="block text-sm text-gray-400">
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(eventDate))}
          </span>
        </div>
      </div>
      <div class="flex-1">
        {#if events.length === 0}
          <p class="text-center text-gray-500">No Events :(</p>
        {:else}
          {#each dateEvents as event}
            <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <div class="text-sm text-gray-400">{event.startTime} - {event.endTime}</div>
              <h3 class="text-lg font-semibold my-2">{event.title}</h3>
              <div class="text-sm text-gray-400">By {event.organizer}</div>
              <div class="text-sm text-gray-400">{event.location}</div>
              <div
                class="inline-block px-2 py-1 rounded text-xs mt-2"
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
              {#if event.image}
                <img src={event.image} alt={event.title} class="w-full rounded mt-2" />
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>
