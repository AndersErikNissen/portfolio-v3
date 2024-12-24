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

      <!-- <all-designs :useCase="useDesignsObj" class="fill"></all-designs> -->

      <section class="underConstruction fill flex center">
        <h4>Under Konstruktion!</h4>
      </section>

      <svg-bot></svg-bot>

    </section>

  </main>
</template>

<script>

import theArrow from "../components/Common/TheArrow.vue"
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import bgSvg from "@/assets/svg/BackgroundClouds.svg";
// import allDesigns from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
import introHeader from "../components/UI/Universal/UiIntroHeader.vue";
export default {
  name: "DesignsPage",
  components: {
    // allDesigns,
    introHeader,
    svgTop,
    svgBot,
    theArrow,
  },
  data() {
    return {
      useDesignsObj: this.$store.state.staticData.universal.designs.all,
      bgSvg,
      currentPageData: this.$store.state.main.designs,
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
.underConstruction {
  min-height: 50vh;
}
</style>