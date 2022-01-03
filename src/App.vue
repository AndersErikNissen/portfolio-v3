<template>
  <the-nav></the-nav>
  <router-view id="view" />
  <div id="arrow" class="flex center">
   <div @click="scrollToView"> Arrow </div>
  </div>
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
    scrollToView() {
      // Help from Stackoverflow: https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component;
      let 
      view = document.querySelector(".sticky--main"),
      viewTop = view.offsetTop + 100;
      console.log("CLICK!", view, viewTop)

      window.scrollTo({
        top: viewTop,
        left: 0,
        behavior: "smooth"
      })
    }
  },
  created() {
    //Updates static data to store.state
    this.$store.commit("SET_STATIC_DATA");
    //Add a functional "mediaquery-watcher" to use for methods and other stuff.
    this.resizeWindow();
  },
};
</script>

<style lang="scss">
#arrow {
  position: fixed;
  bottom: 1rem;
  left: 0;
  width: 100%;
  background-color: white;
}
#view {
  min-height: 100vh;
}
</style>
