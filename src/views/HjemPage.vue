<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <h1>
      {{ pageObj }}
      Check forside!
    </h1>
    <h3>
      <!-- ACF.title = {{ hjemObj.acf.title}} -->
    </h3>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  name: "HjemPage",
  data() {
    return {
      WPID: this.$store.state.nav.find((item) => item.title === "Hjem"),
    };
  },
  computed: {
    pageObj() {
      return this.$store.state.api_data.find((data) => data.id == this.WPID.WPpost);
    },
  },
  methods: {
    checkData() {
      // this.$router.push("/notfound")
      this.$store.dispatch("GET_API_DATA", { id: this.WPID.WPpost });
      if(!this.pageObj) {
        // Ikke optimalt.
        // this.$router.push("/notfound")
      }
      // this.$store.dispatch("GET_API_DATA", { id: 894984});
    },
  },
  created() {
    this.checkData();
  },
};
</script>

<style lang="scss" scoped>
.brad {
  font-size: 1rem;
}
</style>


