import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig((config) => ({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      ...(config.mode === "test"
        ? {
            "@ionic/vue": fileURLToPath(
              new URL(
                "./node_modules/@ionic/vue/dist/index.esm",
                import.meta.url
              )
            ),
          }
        : {}),
    },
  },
  test: {
    setupFiles: ["./src/setupTests.ts"],
    deps: {
      inline: ["@vue", "@vueuse"],
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        "vue/macros",
        "@vueuse/core",
        "@vueuse/head",
        "vitest",
        {
          "@ionic/vue": [
            "actionSheetController",
            "alertController",
            "createAnimation",
            "createGesture",
            "getPlatforms",
            "getTimeGivenProgression",
            "IonicSafeString",
            "IonicSlides",
            "IonicSwiper",
            "IonicVue",
            "iosTransitionAnimation",
            "isPlatform",
            "loadingController",
            "mdTransitionAnimation",
            "menuController",
            "modalController",
            "onIonViewDidEnter",
            "onIonViewDidLeave",
            "onIonViewWillEnter",
            "onIonViewWillLeave",
            "pickerController",
            "popoverController",
            "toastController",
            "useBackButton",
            "useIonRouter",
            "UseIonRouterResult",
            "useKeyboard",
          ],
        },
      ],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith("Ion")) {
            return { name: componentName, from: "@ionic/vue" };
          }
        },
      ],
      dts: "src/components.d.ts",
    }),
  ],
}));
