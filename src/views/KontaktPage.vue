<template>
  <main :style="'background-image: url(' + bgSvg + ');'" class="flex heroBg">

    <intro-header
      :dataObj="currentPageData"
      :email="true"
      class="sticky--main"
    ></intro-header>

    <svg-loader
      :svgPath="svg"
      :svgAlt="svgDesc"
    ></svg-loader>

  </main>
</template>

<script>

import bgSvg from "@/assets/svg/BackgroundClouds.svg";
import introHeader from "../components/UI/Universal/UiIntroHeader.vue";
import svgLoader from "../components/UI/SVG/SvgLoaderContainer.vue";
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
      currentPageData: this.$store.state.main.kontakt,
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
main {
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: row;
  align-items: center;
  & > * {
    width: 50%;
  }
}
@media screen and (max-width: 1024px) {
  main {
    & > * {
      width: 100%;
    }
    &.flex {
      flex-direction: column-reverse;
    }
  }
}
</style>