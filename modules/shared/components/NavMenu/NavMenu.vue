<template>
  <nav class="nav-menu">
    <div class="nav-menu__links">
      <UILink
        v-for="(link, index) of linkList"
        :key="index"
        :to="link.name ? { name: link.name } : '#'"
        :hover-underline="false"
        class="nav-menu__link"
        :class="{ 'nav-menu__link_active': link.name === route.name }"
      >
        <NuxtIcon
          mode="svg"
          size="22"
          :name="link.name === route.name ? link.activeIcon : link.icon"
          class="nav-menu__link-icon"
        />

        <span>{{ link.title }}</span>
      </UILink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { linkList } from '~/modules/shared/components/NavMenu/constants';

const route = useRoute();
</script>

<style scoped lang="scss">
.nav-menu {
  --color: var(--secondary-text, gray);
  font-size: 20px;
  font-family: var(--bold-font, sans-serif);

  &__link {
    display: flex;
    align-items: center;
    column-gap: 12px;

    &_active {
      color: var(--main-text, white);
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
