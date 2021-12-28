<template>
  <the-nav></the-nav>
  <router-view class="routerView" />
  <the-footer></the-footer>
</template>

<script>
import axios from "axios";
import theNav from "./components/Common/TheNavigation.vue";
import theFooter from "./components/Common/TheFooter.vue";

export default {
  name: "App",
  components: {
    theNav,
    theFooter,
  },
  methods: {
    getPosts: function () {
      axios
        .get(
          "https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50"
        )
        .then((response) => {
          console.log(
            "%c Get from API: ",
            "background: #FFF; color: rgb(214, 36, 155)",
            response.data
          );
        });
    },
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
    //Add a functional "mediaquery-watcher" to use for methods and other stuff.
    this.resizeWindow();

    // this.getPosts();
  },
  mounted() {},
};
</script>

<style lang="scss">
</style>
