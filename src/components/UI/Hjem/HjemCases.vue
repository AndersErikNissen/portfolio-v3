<template>
  <section>
    <h2>Cases</h2>
    <ul>
      
    </ul>

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
          await this.$store.dispatch("loadAllCases");
          console.log("%c SUCCESS HjemCases.vue", "background-color: green;");
        } catch (e) {
          console.log("%c ERROR HjemCases.vue", "background-color: red;")
          this.error = e;
        }
        if(this.getAllCases.length )
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