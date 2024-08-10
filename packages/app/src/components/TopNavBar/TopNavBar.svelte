<script lang="ts">
  // variables

  import { ConnectWalletButton } from '$components/Button';
  import { NavigationData } from '$configs';
  import { TELEGRAM_URL, TWITTER_URL } from '$libs/socials';
</script>

<div
  class="flex flex-col md:flex-row items-center justify-between max-w-[1440px] px-4 lg:px-10 w-full py-4 text-primary-content">
  <!-- Left Section -->
  <a class="flex justify-between items-start md:w-1/3" href="/">
    <div class="title-subsection-semibold">Eventur</div>
  </a>

  <!-- Middle Section -->
  <div class="flex flex-wrap items-center justify-center h-10 gap-2 lg:gap-8 body-medium md:w-1/3">
    {#each NavigationData as data}
      <a href={data.url} class="w-[80px] text-center">{data.label}</a>
    {/each}
  </div>

  <!-- Right Section -->
  <div class="flex gap-2 lg:gap-8 items-center justify-center md:justify-end md:w-1/3">
    <div class="flex flex-wrap gap-2 lg:gap-8 items-center justify-center">
      <a class="" href={TELEGRAM_URL} target="_blank">Telegram</a>
      <a class="" href={TWITTER_URL} target="_blank">Twitter</a>
    </div>
    <div class="mt-2 md:mt-0">
      <ConnectWalletButton />
    </div>
  </div>
  <!-- <div class="flex md:hidden mt-4">
    <MobileNavigation />
  </div> -->
</div>
