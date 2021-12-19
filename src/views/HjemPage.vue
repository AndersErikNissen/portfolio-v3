<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <section v-if="pageObj">
      <h1>
        {{ pageObj.acf.titletoh1 }}
      </h1>
      <hjem-cases></hjem-cases>
    </section>
    <section v-else>
      <!-- Skeleton Grid -->
      <h2>
        Loading...
      </h2>
    </section>
  </main>
</template>

<script>
import hjemCases from "../components/UI/Hjem/HjemCases.vue"
export default {
  name: "HjemPage",
  components: {
    hjemCases,
  },
  data() {
    return {
      pageObj: undefined,
      cases: undefined,
      designs: undefined,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.nav.find((item) => item.title === "Hjem");
    },
  },
  methods: {
    getPageData() {
      this.$store
        .dispatch("GET_API_DATA", { id: this.getId.WPpost })
        .then((res) => {
          this.pageObj = res;
        })
        .catch((error) => {
          console.log(error.message)
          //If there is an error, that means data was not in state, and the API call failed, so something is wrong.
          //So the user should be directed to the errorPage.
          this.$router.push("/notfound");
        });
    },
  },
  created() {
    this.getPageData();
  },
};
</script>

<style lang="scss" scoped>

</style>


