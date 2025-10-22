<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li v-for="item of filteredLinksList" :key="item.title" class="nav-menu__list-item mb-2">
        <UILink :to="item.to" :hover-underline="false" class="nav-menu__link" v-on="item.listeners">
          <NuxtIcon :name="`${item.icon}`" class="nav-menu__item-icon mr-2" size="20" />
          <span>{{ item.title }}</span>
        </UILink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface link {
  to?: string;
  title: string;
  icon: string;
  listeners?: any;
  public?: true;
}

const linkList: link[] = [
  { to: '/search', title: 'Search', icon: 'ion:search', public: true },
  { to: '/artist/68ae594efbf171fe431ed5bf', title: 'Drake', icon: 'ion:ios-person', public: true },
];
const filteredLinksList = computed(() => {
  return linkList.filter((i) => i.public);
});
</script>

<style scoped lang="scss">
.nav-menu {
  --color: var(--off-white);
  font-size: 20px;
  font-family: var(--bold-font);

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
