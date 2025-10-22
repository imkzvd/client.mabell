<template>
  <div class="install-pwa-banner">
    <div class="install-pwa-banner__columns">
      <Logo width="32px" height="32px" class="install-pwa-banner__logo" />

      <div class="install-pwa-banner__details">
        <UIText is-bold class="install-pwa-banner__title"> Mabell Application </UIText>

        <UIText appearance="secondary" class="install-pwa-banner__subtitle">
          Discover new music every day
        </UIText>
      </div>

      <UIButton size="sm" @click="onClick">Get App</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

function onClick() {
  router.push({ name: 'pwa' });
}
</script>

<style scoped lang="scss">
.install-pwa-banner {
  &__columns {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 8px;
  }

  &__column {
    display: flex;
  }

  &__logo {
    width: 32px;
    height: 32px;

    @include respond-to(xs) {
      width: 40px;
      height: 40px;
    }
  }

  &__details {
    line-height: 1.2;
  }

  &__title {
    font-size: 14px;

    @include respond-to(xs) {
      font-size: 16px;
    }
  }

  &__subtitle {
    font-size: 12px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }
}
</style>
