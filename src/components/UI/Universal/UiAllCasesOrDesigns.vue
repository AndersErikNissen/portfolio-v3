<template>
  <section>
    <section v-if="noData">
      <h4 class="italic">No Data</h4>
    </section>
    <section v-if="!noData && getAll.length > 0">
      <!-- If only a certain amount should be shown, then use the first section otherwise use the second that will show all data found. -->
      <section v-if="useCase.show">
        <!-- It is n - 1, because v-for starts with 1 where as an array start with a 0 -->
        <ui-display v-for="n in useCase.show" :key="n-1" :dataObj="getAll[n-1]" :basePath="useCase.path"></ui-display>
      </section>
      <section v-else>
        <ui-display
          v-for="obj in getAll"
          :key="obj.slug"
          :dataObj="obj"
          :basePath="useCase.path"
        ></ui-display>
      </section>
    </section>

    <section v-if="loading && !error && !noData" class="loading">
      <!-- Skeleton Grid -->
    </section>
  </section>
</template>

<script>
import uiDisplay from "./UiDisplayCasesAndDesigns.vue";
export default {
  name: "HjemCases",
  components: {
    uiDisplay,
  },
  props: {
    useCase: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      error: false,
      loading: false,
      noData: false,
    }
  },
  computed: {
    getAll() {
      let all = false,
      type = this.useCase.type;
      if(type === 0) {
        all = this.$store.state.cases;
      } else if(type === 1) {
        all = this.$store.state.designs;
      }
      console.log(
        "%c getAll ",
        "background-color:aqua;color: orange;",
        all
      );
      return all;
    },
  },
  methods: {
    async checkCases() {
      // Check if the getPage can find some data that matches, because then we don't need to make an API call.
      if (this.getAll.length <= 0) {
        this.loading = true;
        try {
          // Payload with dispatch:
          // 0 - Is for all Cases
          // 1 - Is for all Designs
          await this.$store.dispatch("loadAll", this.useCase.type);
          console.log("%c SUCCESS HjemCases.vue", "background-color: green;");
        } catch (e) {
          console.log("%c ERROR HjemCases.vue", "background-color: red;");
          this.error = e;
        }
        // Looking for .length 0, didn't seem to work since the array we get back has the length 1, with 1 empty array inside.
        // - ? That might because we use find, and I think that returns an empty array ?
        if (this.getAll[0] == false) {
          // If the GET are done without and error, and still no data, then no data was found.
          this.noData = true;
        }
        this.loading = false;
      }
    },
  },
  mounted() {
    this.checkCases();
  },
};
</script>

<style lang="scss" scoped>
</style>