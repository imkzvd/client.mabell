export default defineNuxtPlugin(() => {
  const router = useRouter();

  const scrollTop = () => {
    // TODO: added in config
    document.querySelector('.default-layout__panel_main')?.scrollTo(0, 0);
  };

  router.afterEach((to, from) => {
    if (to.path !== from.path) {
      nextTick(() => scrollTop());
    }
  });
});
