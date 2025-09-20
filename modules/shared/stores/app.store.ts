import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const isDisabledGlobalScroll = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const message = ref<string | null>(null);

  function disableGlobalScroll() {
    isDisabledGlobalScroll.value = true;
  }

  function enableGlobalScroll() {
    isDisabledGlobalScroll.value = false;
  }

  function toggleLoading() {
    isLoading.value = !isLoading.value;
  }

  function setMessage(value: string) {
    message.value = value;

    setTimeout(() => {
      message.value = null;
    }, 5000);
  }

  return {
    isLoading,
    message,
    //
    toggleLoading,
    setMessage,
    isDisabledGlobalScroll,
    disableGlobalScroll,
    enableGlobalScroll,
  };
});
