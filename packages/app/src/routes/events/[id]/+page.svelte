<script>
  import { EventDetail } from '$components/Event';
  import { AttendeeList, RegistrationForm } from '$components/Registration';

  // Context
  import { page } from '$app/stores';
  import FrameMetadata from '$components/FarcasterFrame/FrameMetadata.svelte';
  import { mockFrameMeta } from '$libs/frames';
</script>

<!-- <FrameMetadata title={'Frame Event'} metadata={mockFrameMeta} baseUrl={$page.url} showPreview={true} /> -->

<div class="flex gap-4">
  <div class="flex w-full">
    <div class="flex flex-col gap-4 p-2">
      <img src="https://via.placeholder.com/200x200" alt="Frame Logo" class="rounded-xl w-fit" />
      <div>Hosted by</div>
      <div class="divider divider-accent"></div>
      <div>Host</div>
      <AttendeeList />
    </div>

    <div class="flex flex-col gap-4">
      <EventDetail />
    </div>
  </div>
</div>
