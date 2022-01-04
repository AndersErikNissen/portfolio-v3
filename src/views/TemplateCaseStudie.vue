<template>
  <main>
    <the-loading :check="loadingCheck"></the-loading>
    <template-header v-if="getCase" :dataObj="pageACF"></template-header>
    <the-arrow :clean="true"></the-arrow>
    <section v-if="getCase" class="sticky--main">
      <svg-top></svg-top>
      <section class="grid--template fill">
        <template-aside :dataObj="pageACF"></template-aside>
        <section class="max-width">
          <template-description :dataObj="pageACF"></template-description>
          <template-shell :dataObj="pageACF.text_areas"></template-shell>
        </section>
      </section>
      <section class="fill flex center column">
        <h2>Relaterede</h2>
      <show-cases :useCase="amountOfCases" :removeFromRange="getRange"></show-cases>
      </section>
      <svg-bot></svg-bot>
    </section>

  </main>
</template>

<script>
import theLoading from "../components/Common/TheLoading.vue"
import theArrow from "../components/Common/TheArrow.vue";
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import templateAside from "../components/UI/Template/TemplateAside.vue";
import templateHeader from "../components/UI/Template/TemplateHeader.vue";
import templateDescription from "../components/UI/Template/TemplateDescription.vue";
import templateShell from "../components/UI/Template/TemplateSegmentShell.vue";

import showCases from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
export default {
  name: "TemplateCaseStudie",
  props: {
    case: {
      type: String,
      required: true,
    },
  },
  components: {
    templateHeader,
    templateDescription,
    templateShell,
    templateAside,
    svgTop,
    svgBot,
    theArrow,
    theLoading,
    showCases,
  },
  data() {
    return {
      loading: false,
      amountOfCases: this.$store.state.staticData.universal.cases.template,
    };
  },
  computed: {
    getCase() {
      return this.$store.state.cases.find((item) => item.slug === this.case);
    },
    pageACF() {
      let acf = {};
      const pageData = this.getCase;
      if (pageData) {
        acf = pageData.acf;
      }
      return acf;
    },
    loadingCheck() {
      let check = false;
      if(this.loading === false && !this.getCase || this.getCase === undefined) {
        check = true;
      }
      return check;
    },
    getRange() {
      let range = undefined,
      map = undefined;
      if(this.getCase) {
        //Map returns a new array with false / true, depending on what I could find.
        map = this.$store.state.cases.map( item => item.slug === this.case);
        // We need the index of the current case, so we can exclude it from the array that shows other Work.
        range = map.indexOf(true);
      }
      return range;
    }
  },
  methods: {
    async checkPageData() {
      // If getCase is false, loadAll to make sure if it exist in the Database. If there still are no data, then push.(/notfound).
      if (!this.getCase) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadAll", 0);
          // If we have checked the data.array, tried loading the newest version from the API, and still no data, then something must be wrong.
          // - Like a wrong URL.
          if (!this.getCase && this.loading === true) {
            this.$router.push("/notfound");
          }
        } catch (e) {
          this.$router.push("/notfound");
        }
        this.loading = false;
      }
    },
  },
  mounted() {
    this.checkPageData();
    window.scrollTo(0, 0);
  },
  watch: {
    case: function () {
      // If the params, change, check the data inside store and the after (if not in store) API call.
      // If the params is not in the data(getCase() = undefined)
      this.checkPageData();
    },
  }
};
</script>

<style lang="scss" scoped>
</style>