<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view />
  <hero-hero></hero-hero>
</template>

<script>
import HeroHero from "./Layouts/HomePage/HomepageHero.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HeroHero,
  },
  methods: {
    getPosts: function () {
      axios.get("https://skole.aenders.dk/wp-json/wp/v2/posts?status=publish&per_page=50")
      .then((response) => {
        console.log(response.data)

      })
    }
  },
  created() {
    this.getPosts();
    console.log(this.$store.state)
  }
};
</script>

<style lang="scss">


</style>
