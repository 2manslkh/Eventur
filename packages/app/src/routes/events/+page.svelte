<script>
  import { Timeline } from '$components/Timeline';
  import { getEvents } from '$libs/eas';

  import { events } from '$stores';
  import { onMount } from 'svelte';

  onMount(async () => {
    await getEvents();
  });
</script>

<div class="container max-w-screen-lg">
  <div class="flex w-full justify-between items-center">
    <h1 class="text-2xl font-bold mb-4">Events Timeline</h1>
    <a
      href="/events/new"
      class="bg-primary-button font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">+ Event</a>
  </div>
  <Timeline events={$events} />
</div>
