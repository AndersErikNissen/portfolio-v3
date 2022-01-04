<template>
  <section
    class="error__outer flex center heroBg bgSvg"
    :style="'background-image: url(' + bgSvg + ');'"
  >
    <section class="split--60">
      <h1 class="clamp">Fejl 404</h1>
      <h3>Noget gik galt et sted, bedre held næste gang.</h3>
      <router-link class="btn round" to="/"
        ><span>TIL FORSIDE</span></router-link
      >
    </section>

    <svg-import
      svgPath="error.svg"
      svgAlt="Billede af monster der sover på en sky"
      class="split--40"
    ></svg-import>
  </section>
</template>

<script>
import bgSvg from "@/assets/svg/BackgroundClouds.svg";
import svgImport from "../components/UI/SVG/SvgLoaderContainer.vue";
export default {
  name: "ErrorPage",
  components: {
    svgImport,
  },
  data() {
    return {
      bgSvg,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.error__outer {
  & .split--60 {
    color: var(--color-font-second);
    padding: var(--padding-5);
  }
}
h3 {
  max-width: 20ch;
}
</style>