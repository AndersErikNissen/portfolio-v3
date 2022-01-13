<template>
  <main>
    <transition name="opa">
      <the-loading v-if="loading"></the-loading>
    </transition>
    <intro-header
      :style="'background-image: url(' + bgSvg + ');'"
      class="flex column bgSvg"
      :dataObj="pageACF"
    ></intro-header>
    <the-arrow></the-arrow>
    <section class="sticky--main">
      <svg-top></svg-top>
      <!-- <all-designs :useCase="useDesignsObj" class="fill"></all-designs> -->
      <section class="underConstruction fill flex center">
        <h2>Under Konstruktion!</h2>
      </section>
      <svg-bot></svg-bot>
    </section>
  </main>
</template>

<script>
import theLoading from "../components/Common/TheLoading.vue"
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
    theLoading
  },
  data() {
    return {
      loading: false,
      useDesignsObj: this.$store.state.staticData.universal.designs.all,
      bgSvg,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "Designs"
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
.underConstruction {
  min-height: 50vh;
}
</style>