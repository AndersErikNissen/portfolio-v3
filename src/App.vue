<template>
  <the-nav></the-nav>
  <router-view id="view" />
  <the-footer></the-footer>
</template>

<script>
import theNav from "./components/Common/TheNavigation.vue";
import theFooter from "./components/Common/TheFooter.vue";

export default {
  name: "App",
  components: {
    theNav,
    theFooter,
  },
  methods: {
    resizeWindow: function () {
      // A debouncer could be used here, like lodash's debounce, or on could be created, but,
      // since this will mostly be used when inspecting in the Browser, it shouldn't be that needed.
      window.addEventListener("resize", () => {
        this.$store.commit("RESIZE_WINDOW");
      });
    },
  },
  created() {
    //Updates static data to store.state
    this.$store.commit("SET_STATIC_DATA");
    this.$store.commit("SET_NEW_DATA");

    //Add a functional "mediaquery-watcher" to use for methods and other stuff.
    this.resizeWindow();
  },
};
</script>

<style lang="scss">
#view {
  min-height: 100vh;
}
</style>
