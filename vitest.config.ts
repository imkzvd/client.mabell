import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    globals: true,
    // environment: "happy-dom",
    // environment: "jsdom",
    environment: "nuxt",
    watch: true,
    setupFiles: ["vitest.setup.js"],
  },
});
