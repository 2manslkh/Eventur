<script lang="ts">
  // variables

  import { ConnectWalletButton } from '$components/Button';
  import { NavigationData } from '$configs';
  import { TELEGRAM_URL, TWITTER_URL } from '$libs/socials';
</script>

<div class="flex justify-between items-center max-w-[1440px] px-4 lg:px-10 w-full py-4 text-primary-content gap-4">
  <!-- Left Section -->
  <a class="flex justify-between items-start w-full" href="/">
    <div class="title-subsection-semibold">Eventur</div>
  </a>
  <!-- Middle Section -->
  <div class="flex items-center justify-center h-10 gap-2 lg:gap-8 body-medium">
    {#each NavigationData as data}
      <a href={data.url} class="w-fit">{data.label}</a>
    {/each}
  </div>

  <!-- Right Section -->
  <div class="lg:flex gap-2 lg:gap-8 items-center flex w-full justify-end">
    <!-- <ThemeToggle /> -->
    <div class="lg:flex gap-2 lg:gap-8 items-center flex">
      <a class="" href={TELEGRAM_URL} target="_blank">Telegram</a>
      <a class="" href={TWITTER_URL} target="_blank">Twitter</a>
    </div>
    <div class="hidden lg:flex">
      <ConnectWalletButton />
    </div>
  </div>
  <!-- <div class="flex lg:hidden">
    <MobileNavigation />
  </div> -->
</div>
