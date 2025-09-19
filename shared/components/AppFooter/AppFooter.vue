<template>
  <footer class="app-footer py-8">
    <div class="container">
      <div class="app-footer__copyright mb-2">Copyright © 2024</div>

      <div class="app-footer__links">
        <UILink class="mr-1">Privacy</UILink>&
        <UILink>Feedback</UILink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.app-footer {
  padding-block: 32px;
  font-size: 12px;
  color: var(--secondary-text);

  &__copyright {
    margin-bottom: 8px;
  }
}
</style>
