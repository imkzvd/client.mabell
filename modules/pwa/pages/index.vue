<template>
  <div class="pwa-page">
    <div class="container">
      <UIHeading class="pwa-page__heading">Mabell Application</UIHeading>
    </div>

    <UISection with-container>
      <dl class="pwa-page__instruction-list">
        <dt class="pwa-page__instruction-list-term">
          1. Tap the Share Icon
        </dt>

        <dd class="pwa-page__instruction-list-definition">
          <UIText size="14px" appearance="secondary" class="pwa-page__item-description">
            Tap the Share icon <NuxtIcon name="i-material-symbols-light-ios-share" size="16" /> located at the bottom of the screen (the square with an upward arrow).
          </UIText>

          <NuxtImg class="pwa-page__image" src="/images/pwa-instruction-1.jpg" />
        </dd>

        <dt class="pwa-page__instruction-list-term">2. Add to Home Screen</dt>

        <dd class="pwa-page__instruction-list-definition">
          <UIText size="14px" appearance="secondary" class="pwa-page__item-description">
            In the Share menu, scroll through the options and tap on Add to Home Screen.
          </UIText>

          <NuxtImg class="pwa-page__image" src="/images/pwa-instruction-2.jpg" />
        </dd>

        <dt class="pwa-page__instruction-list-term">3. Launch the Mabell App</dt>

        <dd class="pwa-page__instruction-list-definition">
          <UIText size="14px" appearance="secondary" class="pwa-page__item-description">
            After installation, you’ll find the app icon on your Home Screen. Tap the icon to launch the Mabell App.
          </UIText>

          <NuxtImg class="pwa-page__image" src="/images/pwa-instruction-3.jpg" />
        </dd>
      </dl>
    </UISection>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.pwa-page {
  padding-block: 32px;

  &__heading {
    margin-bottom: 32px;
  }

  &__instruction-list-term {
    margin-bottom: 8px;
  }

  &__instruction-list-definition {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  &__item-description {
    margin-bottom: 16px;
  }

  &__image {
    border-radius: 16px;
    border: 1px solid var(--gray-darkest, #ccc);
  }
}
</style>