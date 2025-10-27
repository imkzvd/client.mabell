<template>
  <div ref="mobile-nav-menu" class="mobile-nav-menu">
    <div class="mobile-nav-menu__links">
      <NuxtLink
        v-for="(link, index) of linkList"
        :key="index"
        :to="link.name ? { name: link.name } : '#'"
        class="mobile-nav-menu__link"
        :class="{ 'mobile-nav-menu__link_active': link.name === route.name }"
      >
        <NuxtIcon
          mode="svg"
          size="24"
          :name="link.name === route.name ? link.activeIcon : link.icon"
          class="mobile-nav-menu__link-icon"
        />

        <span>{{ link.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { linkList } from '~/modules/shared/components/MobileNavMenu/constants';

const route = useRoute();
</script>

<style scoped lang="scss">
.mobile-nav-menu {
  font-size: 12px;

  &__links {
    display: flex;
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    width: 25%;
    padding-block: 8px;

    &_active {
      color: var(--main-text);
    }
  }

  &__link-icon {
    flex-shrink: 1;
  }
}
</style>
