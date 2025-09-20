<template>
  <div ref="mobile-nav-menu" class="mobile-nav-menu">
    <ul class="mobile-nav-menu__list">
      <li class="mobile-nav-menu__list-item">
        <NuxtIcon mode="svg" size="24" name="i-ph-house-fill" class="mobile-nav-menu__list-item-icon" />

        <span>Home</span>
      </li>

      <li class="mobile-nav-menu__list-item">
        <NuxtIcon mode="svg" size="24" name="i-ph-magnifying-glass-fill" class="mobile-nav-menu__list-item-icon" />

        <span>Search</span>
      </li>

      <li class="mobile-nav-menu__list-item">
        <NuxtIcon mode="svg" size="24" name="i-ph-music-note-fill" class="mobile-nav-menu__list-item-icon" />

        <span>Library</span>
      </li>

      <li class="mobile-nav-menu__list-item">
        <NuxtIcon mode="svg" size="24" name="i-ph-sign-in-bold" class="mobile-nav-menu__list-item-icon" />

        <span>Sign In</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.mobile-nav-menu {
  width: 100%;
  height: var(--mobile-nav-menu, 64px);
  font-family: var(--regular-font);
  font-size: 12px;
  border-top: 1px solid var(--nav-devider-color);
  background-color: rgba(18, 18, 18, 88%);
  backdrop-filter: blur(15px) saturate(100%);
  padding-bottom: 8px;
  position: relative;
  background-color: #121212;
  box-shadow: 0 0 20px 4px var(--black);


  &__list {
    display: flex;
  }

  &__list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8px;
    width: 25%;
  }

  &__list-item-icon {
    flex-shrink: 1;
    margin-bottom: 4px;
  }
}
</style>
