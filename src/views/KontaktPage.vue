<template>
  <main :style="'background-image: url(' + bgSvg + ');'" class="flex row">
    <svg-loader :svgPath="svg" :svgAlt="svgDesc"></svg-loader>
    <intro-header :dataObj="pageACF" :email="true"></intro-header>
  </main>
</template>

<script>
import bgSvg from "@/assets/svg/BackgroundClouds.svg"
import introHeader from "../components/UI/Universal/UiIntroHeader.vue";
import svgLoader from "../components/UI/SVG/SvgLoaderContainer.vue"
export default {
  name: "KontaktPage",
  components: {
    introHeader,
    svgLoader,
  },
  data() {
    return {
      loading: false,
      svg: "Balloon.svg",
      svgDesc: "Et monster i en luftballon",
      bgSvg,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "Kontakt"
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
    window.scrollTo(0,0);
  },
};
</script>

<style lang="scss" scoped>
main {
  background-size: cover;
  background-repeat: no-repeat;
}
main > * {
  width: 50%;
}
</style>