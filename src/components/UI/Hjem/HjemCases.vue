<template>
  <section>
    <h2>Cases</h2>
    <ul>
      <!-- <li v-for="caseObj in cases" :key="caseObj">
        {{ caseObj }}
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  name: "HjemCases",
  data() {
    return {
      showAmount: 2,
      cases: undefined,
    };
  },
  computed: {
    getLibCases() {
      return this.$store.state.library.cases;
    },
    // whileCases() {
    //   // Check Library and get a surtain amount of objects from the array - randomly.
    // },
  },
  methods: {
    getCases() {
        console.log(this.$store.dispatch("GET_API_RANDOM_CASES"));
    //   [1,2].forEach((obj) => {
    //       console.log("FISK!",obj)
    //     // this.$store
    //     //   .dispatch("GET_API_DATA", { id: obj.wppost })
    //     //   .then((res) => {
    //     //     this.cases = res;
    //     //   })
    //     //   .catch((error) => {
    //     //     console.log(
    //     //       "%c " + this.getId.title + " .Catch",
    //     //       "background-color:red; color:white;",
    //     //       error.message
    //     //     );
    //     //     //If there is an error, that means data was not in state, and the API call failed, so something is wrong.
    //     //     //So the user should be directed to the errorPage.
    //     //     this.$router.push("/notfound");
    //     //   });
    //   });
    },
  },
  created() {
    this.getCases();
  },
};
</script>

<style lang="scss" scoped>
</style>