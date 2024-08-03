<script lang="ts">
  import { TELEGRAM_URL, TWITTER_URL } from '$libs/socials';
</script>

<div class="flex w-full max-w-[1440px] lg:px-10 px-4 bg-primary-background">
  <div class="flex flex-col lg:flex-row w-full items-center lg:items-start lg:justify-between py-6 gap-4">
    <div class="flex flex-row gap-2 lg:gap-2 w-full justify-between">
      <!-- Left Footer -->
      <div class="text-2xl rainbow-text-and-shadow">LEFT FOOTER</div>
      <!-- Right Footer -->
      <div class="lg:flex gap-2 lg:gap-8 items-center flex">
        <a class="" href={TELEGRAM_URL} target="_blank">Telegram</a>
        <a class="" href={TWITTER_URL} target="_blank">Twitter</a>
      </div>
    </div>
  </div>
</div>

<style>
</style>
