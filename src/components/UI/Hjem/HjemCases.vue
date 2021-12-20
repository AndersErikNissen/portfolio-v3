<template>
  <section>
    <section v-if="noData">
      <h4 class="italic">No Data</h4>
    </section>
    <section v-else>
      <div>
        <h2>Cases</h2>
      </div>
      <section>
        <ui-display
          v-for="obj in getAllCases"
          :key="obj.slug"
          :obj="obj"
          :basePath="basePath"
        ></ui-display>
      </section>
    </section>

    <section v-if="loading && !error" class="loading">
      <!-- Skeleton Grid -->
    </section>
  </section>
</template>

<script>
import uiDisplay from "../Universal/UIDisplayContainer.vue";
export default {
  name: "HjemCases",
  components: {
    uiDisplay,
  },
  data() {
    return {
      showAmount: 2,
      error: false,
      loading: false,
      noData: false,
      basePath: "/case-studies/",
    };
  },
  computed: {
    getAllCases() {
      console.log("ALL CASES", this.$store.state.cases);
      return this.$store.state.cases;
    },
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
          console.log("%c ERROR HjemCases.vue", "background-color: red;");
          this.error = e;
        }

        // Looking for .length 0, didn't seem to work since the array we get back has the length 1, with 1 empty array inside.
        // - ? That might because we use find, and I think that returns an empty array ?
        if (this.getAllCases[0] == false) {
          // If the GET are done without and error, and still no data, then no data was found.
          this.noData = true;
        }
        this.loading = false;
      }
    },
  },
  created() {},
  mounted() {
    this.checkCases();
    console.log(this.getAllCases);
  },
};
</script>

<style lang="scss" scoped>
</style>