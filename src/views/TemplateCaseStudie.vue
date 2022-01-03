<template>
  <main>
    <template-header v-if="getCase" :dataObj="pageACF"></template-header>
    <the-arrow :clean="true"></the-arrow>
    <section>
      <svg-top></svg-top>
      <template-description></template-description>
      <template-block></template-block>
    {{ pageACF }}
      <svg-bot></svg-bot>
    </section>
  </main>
</template>

<script>
import theArrow from "../components/Common/TheArrow.vue"
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import templateHeader from "../components/UI/Template/TemplateHeader.vue";
import templateDescription from "../components/UI/Template/TemplateDescription.vue";
import templateBlock from "../components/UI/Template/TemplateSegmentBlock.vue";
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
    templateBlock,
    svgTop,
    svgBot,
    theArrow,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getCase() {
      console.log(
        "GETCASE",
        this.$store.state.cases.find((item) => item.slug === this.case)
      );
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
  },
};
</script>

<style lang="scss" scoped>
</style>