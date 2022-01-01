<template>
  <main>
    <intro-header
      :style="'background-image: url(' + bgSvg + ');'"
      class="flex column bgSvg"
      :dataObj="pageACF"
    ></intro-header>
    <section class="sticky--main">
      <svg-top></svg-top>
      <all-cases :useCase="useCasesObj"></all-cases>
      <svg-bot></svg-bot>
    </section>
  </main>
</template>

<script>
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import bgSvg from "@/assets/svg/BackgroundClouds.svg";
import allCases from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
import introHeader from "../components/UI/Universal/UiIntroHeader.vue";
export default {
  name: "CaseStudiesPage",
  components: {
    allCases,
    introHeader,
    svgTop,
    svgBot,
  },
  data() {
    return {
      loading: false,
      useCasesObj: this.$store.state.staticData.universal.cases.all,
      bgSvg,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "CaseStudies"
      );
    },
    getPage() {
      return this.$store.state.main.find(
        (item) => item.id === this.getId.WPpost
      );
    },
    pageACF() {
      let acf = {};
      const pageData = this.$store.state.main.find(
        (item) => item.id === this.getId.WPpost
      );
      if (pageData) {
        acf = pageData.acf;
      }
      return acf;
    },
  },
  methods: {
    async checkPageData() {
      // Check if the getPage can find some data that matches, because then we don't need to make an API call.
      if (!this.getPage) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadSinglePost", this.getId.WPpost);
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
};
</script>

<style lang="scss" scoped>
</style>