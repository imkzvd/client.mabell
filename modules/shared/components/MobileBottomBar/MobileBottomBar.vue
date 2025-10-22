<template>
  <div ref="mobile-bottom-bar" class="mobile-bottom-bar">
    <div v-if="$slots.default" class="mobile-bottom-bar__container">
      <slot name="default" />
    </div>

    <MobileNavMenu ref="mobile-nav-bar" />
  </div>
</template>

<script setup lang="ts">
let scrollTopByFirstTouch = 0;
const throttleFunc = useThrottleFn(hideBar, 500);
const scrollTop = ref(0);
const scrollTopPercent = ref(0);
const scrollPage = ref(0);
const isMobileBottomBarVisible = ref(false);

const mobileBottomBar = useTemplateRef<HTMLDivElement>('mobile-bottom-bar');

onMounted(() => {
  window.addEventListener('touchstart', (e: TouchEvent) => {
    const [touch] = e.touches;
    scrollTopByFirstTouch = window.scrollY;
  });

  window.addEventListener('scroll', throttleFunc);
});

function hideBar(e: Event) {
  if (!mobileBottomBar.value) return;

  scrollPage.value = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollTop.value = document.documentElement.scrollTop;
  scrollTopPercent.value = Math.ceil(scrollTop.value / (scrollPage.value / 100));

  const deltaY = scrollTop.value - scrollTopByFirstTouch;

  if ((deltaY <= -62 || scrollTopPercent.value >= 90) && !isMobileBottomBarVisible.value) {
    mobileBottomBar.value.style.transform = 'initial';
    isMobileBottomBarVisible.value = true;
    scrollTopByFirstTouch = scrollTop.value;
  } else if (deltaY >= 31 && isMobileBottomBarVisible.value && scrollTopPercent.value <= 90) {
    mobileBottomBar.value.style.transform = 'translateY(64px)';
    isMobileBottomBarVisible.value = false;
    scrollTopByFirstTouch = scrollTop.value;
  }
}
</script>

<style scoped lang="scss">
.mobile-bottom-bar {
  position: fixed;
  right: 0;
  bottom: env(safe-area-inset-bottom, 0);
  left: 0;
  z-index: 100;
  transform: translateY(var(--mobile-nav-bar));
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  &__container {
    padding-inline: 8px;
  }
}
</style>
