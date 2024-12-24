<template>
  <main>

    <intro-header
      :style="'background-image: url(' + bgSvg + ');'"
      class="flex column bgSvg"
      :dataObj="currentPageData"
    ></intro-header>

    <the-arrow></the-arrow>

    <section class="sticky--main">

      <svg-top></svg-top>

      <all-cases class="fill" :useCase="useCasesObj"></all-cases>

      <svg-bot></svg-bot>

    </section>

  </main>
</template>

<script>

import theArrow from "../components/Common/TheArrow.vue"
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
    theArrow
  },
  data() {
    return {
      useCasesObj: this.$store.state.staticData.universal.cases.all,
      bgSvg,
      currentPageData: this.$store.state.main.casestudies,
    };
  },
  computed: {
   
  },
  methods: {
   
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>