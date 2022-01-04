<template>
  <section>
    <section v-if="noData" class="fill max-width">
      <h4 class="italic">No Data</h4>
    </section>
    <section v-if="!noData && getAll.length > 0" class="flex column center">
      <!-- If only a certain amount should be shown, then use the first section, if it should be a specific range use the second, otherwise use the third that will show all data found. -->
      <section v-if="useCase.show" class="grid--2x2">
        <!-- It is n - 1, because v-for starts with 1 where as an array start with a 0 -->
        <ui-display
          v-for="n in useCase.show"
          :key="n - 1"
          :dataObj="getAll[n - 1]"
          :basePath="useCase.path"
        ></ui-display>
      </section>
      <section v-else-if="useCase.range" class="grid--2x2">
        <!-- It is n - 1, because v-for starts with 1 where as an array start with a 0 -->
        <ui-display
          v-for="range in getOnlyRange"
          :key="range"
          :dataObj="range"
          :basePath="useCase.path"
          @click="returnTop"
        ></ui-display>
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
  name: "UiAllCasesOrDesigns",
  components: {
    uiDisplay,
  },
  props: {
    useCase: {
      type: Object,
      required: true,
    },
    removeFromRange: {
      type: Number,
    },
  },
  data() {
    return {
      error: false,
      loading: false,
      noData: false,
    };
  },
  computed: {
    getAll() {
      let all = [],
        type = this.useCase.type;
      if (type === 0 && this.$store.state.cases) {
        all = this.$store.state.cases;
      } else if (type === 1 && this.$store.state.designs) {
        all = this.$store.state.designs;
      }
      console.log("%c getAll ", "background-color:aqua;color: orange;", all);
      return all;
    },
    getOnlyRange() {
      let array = [],
        cases = [],
        releaseArray = [],
        randomArray = [];

      // Used to Generat 2 random numbers that isn't the Case currently and are already in the array.
      if (this.useCase.range) {
        cases = this.$store.state.cases;
        for (let i = 0; i < cases.length; i++) {
          if (i != this.removeFromRange) {
            array.push(cases[i]);
          }
        }
        console.log("REMOVERANGE", this.removeFromRange)
        while (releaseArray.length < 2) {
          let random = Math.floor(Math.random() * array.length);
          console.log("RANDOM", random)
          if (random !== this.removeFromRange && !randomArray.includes(random)) {
            releaseArray.push(array[random]);
            randomArray.push(random);
            console.log("asdas",random,randomArray)
          }
        }
      }
      return releaseArray;
    },
  },
  methods: {
    async checkAll() {
      if (this.getAll.length === 0) {
        
        try {
          // Payload with dispatch:
          // 0 - Is for all Cases
          // 1 - Is for all Designs
          await this.$store.dispatch("loadAll", this.useCase.type);
          console.log("%c SUCCESS checkAll ", "background-color: green;");
        } catch (e) {
          console.log("%c ERROR checkAll", "background-color: red;");
          this.error = e;
        }
        if (this.getAll.length === 0) {
          console.log(
            "%c No Data! ",
            "background-color: orange; color: white;"
          );
          // If the GET are done without and error, and still no data, then no data was found.
          this.noData = true;
        }
        
      }
    },
    returnTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.checkAll();
  },
};
</script>

<style lang="scss" scoped>
</style>