<template>
  <section class="theLoading flex center">
    <svg-import
      class="loading__svg"
      svgPath="Loading.svg"
      svgAlt="Loading Animation bestående af et par blinkende skyer"
    ></svg-import>
  </section>
</template>

<script>
import svgImport from "../UI/SVG/SvgLoaderContainer.vue";
export default {
  name: "TheLoading",
  components: {
    svgImport,
  },
  props: {
    check: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.theLoading {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: opacity 1.5s ease-out;
  transition-delay: 1s;
  & .loading__svg {
    width: 100%;
    max-width: 200px;
  }
}
</style>