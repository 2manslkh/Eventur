<script>
  import { EventDetail } from '$components/Event';
  import { AttendeeList } from '$components/Registration';

  // Context
  // import { page } from '$app/stores';
  // import FrameMetadata from '$components/FarcasterFrame/FrameMetadata.svelte';
  // import { mockFrameMeta } from '$libs/frames';
</script>

<!-- <FrameMetadata title={'Frame Event'} metadata={mockFrameMeta} baseUrl={$page.url} showPreview={true} /> -->
<div class="container">
  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start w-full">
    <div class="flex flex-col gap-4 p-2 w-full sm:w-auto">
      <img src="/base.svg" alt="Frame Logo" class="rounded-xl w-fit" />
      <div>Hosted by</div>
      <div class="divider divider-accent"></div>
      <div>Host</div>
      <AttendeeList />
    </div>

    <EventDetail />
  </div>
</div>
