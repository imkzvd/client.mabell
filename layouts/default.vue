<template>
  <div class="default-layout">
    <aside class="default-layout__aside">
      <div>
        Home logo link
      </div>

      <div>
        Nav menu
      </div>

      <div>
        User account
      </div>
    </aside>

    <main class="default-layout__main">
      <slot name="default" />
    </main>

    <div class="default-layout__footer">
      Footer
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.default-layout {
  @include respond-to(xl) {
    display: grid;
    grid-template-columns: var(--main-sidebar, 300px) 1fr;
    grid-template-areas: "aside main" "aside footer";
  }

  &__aside {
    display: none;

    @include respond-to(xl) {
      grid-area: aside;
      position: fixed;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: var(--main-sidebar, 300px);
      background-color: var(--nav-bg, #000000);
      border-right-width: 1px;
      border-style: solid;
      border-right-color: var(--nav-devider-color, #cccccc);
      padding: 32px 16px;
    }
  }

  &__main {
    overflow-x: hidden;

    @include respond-to(xl) {
      grid-area: main;
    }
  }

  &__footer {
    @include respond-to(xl) {
      grid-area: footer;
    }
  }
}
</style>
