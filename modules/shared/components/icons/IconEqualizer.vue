<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :class="rootCssClasses"
  >
    <rect
      class="eq-bar eq-bar--1"
      x="4"
      y="4"
      width="3.7"
      :height="isPlaying ? '8' : '4'"
    />
    <rect
      class="eq-bar eq-bar--2"
      x="10.2"
      y="4"
      width="3.7"
      :height="isPlaying ? '16' : '4'"
    />
    <rect
      class="eq-bar eq-bar--3"
      x="16.3"
      y="4"
      width="3.7"
      :height="isPlaying ? '11' : '4'"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPlaying?: boolean;
}>();

const baseClass = 'icon-equalizer';
const rootCssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_is-playing`]: props.isPlaying,
}));
</script>

<style scoped lang="scss">
.eq-bar {
  transform: scale(1, -1) translate(0, -24px);
}

@keyframes short-eq {
  0% {
    height: 8px;
  }

  50% {
    height: 4px;
  }

  100% {
    height: 8px;
  }
}

@keyframes tall-eq {
  0% {
    height: 16px;
  }

  50% {
    height: 6px;
  }

  100% {
    height: 16px;
  }
}

.icon-equalizer {
  &_is-playing {
    .eq-bar--1 {
      animation-name: short-eq;
      animation-duration: 0.5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
    }

    .eq-bar--1 {
      animation-name: short-eq;
      animation-duration: 0.5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
    }

    .eq-bar--2 {
      animation-name: tall-eq;
      animation-duration: 0.5s;
      animation-delay: 0.17s;
      animation-iteration-count: infinite;
    }

    .eq-bar--3 {
      animation-name: short-eq;
      animation-duration: 0.5s;
      animation-delay: 0.34s;
      animation-iteration-count: infinite;
    }
  }
}
</style>
