<template>
  <section>
    <h2>Cases</h2>
    <ul>
      
    </ul>


    <div v-if="noData">
      <h4 class="italic">
        No Data
      </h4>
    </div>
    <div v-else>
      {{ getAllCases }}
    </div>

    <section v-if="loading && !error" class="loading">
      <!-- Skeleton Grid -->
    </section>
  </section>
</template>

<script>
export default {
  name: "HjemCases",
  data() {
    return {
      showAmount: 2,
      error: false,
      loading: false,
      noData: false,
    };
  },
  computed: {
    getAllCases() {
      console.log("ALL CASES", this.$store.state.cases)
      return this.$store.state.cases;
    }
  },
  methods: {
   async checkCases() {
      // Check if the getPage can find some data that matches, because then we don't need to make an API call.
      if (this.getAllCases.length <= 0) {
        this.loading = true;
        try {
          // Payload with dispatch:
          // 0 - Is for all Cases
          // 1 - Is for all Designs
          await this.$store.dispatch("loadAll", 0);
          console.log("%c SUCCESS HjemCases.vue", "background-color: green;");
        } catch (e) {
          console.log("%c ERROR HjemCases.vue", "background-color: red;")
          this.error = e;
        }

        // Looking for .length 0, didn't seem to work since the array we get back has the length 1, with 1 empty array inside.
        // - ? That might because we use find, and I think that returns an empty array ?
        if(this.getAllCases[0] == false) {
          // If the GET are done without and error, and still no data, then no data was found.
          this.noData = true;
        }
        this.loading = false;
      }
    },
  },
  created() {
  
  },
  mounted() {
    this.checkCases();
    console.log(this.getAllCases)
  }
};
</script>

<style lang="scss" scoped>
</style>