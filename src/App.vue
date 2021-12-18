<template>
  <the-nav></the-nav>
  <router-view />
</template>

<script>
import axios from "axios";
import theNav from "./components/Common/TheNavigation.vue"


export default {
  name: "App",
  components: {
    theNav,
  },
  methods: {
    getPosts: function () {
      axios.get("https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50")
      .then((response) => {
        console.log("%c Get from API: ", 'background: #FFF; color: rgb(214, 36, 155)', response.data)
      })
    },
    resizeWindow: function () {
      window.addEventListener("resize", ()=> {
        this.$store.commit('RESIZE_WINDOW')
      })
    },
  },
  created() {
    //Updates static data to store.state
    this.$store.commit("SET_STATIC_DATA");
    this.$store.dispatch("GET_API_LIBRARY");
    //Add a functional "mediaquery-watcher" to use for methods and other stuff.
    this.resizeWindow();

    // this.getPosts();
  },
  mounted() {
  },
};
</script>

<style lang="scss">


</style>
