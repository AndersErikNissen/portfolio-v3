<template>
  <section :class="['theLoading flex center', check ? 'show' : 'hide']">
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.theLoading {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: opacity 1.5s ease-out;
  transition-delay: .9s;
  & .loading__svg {
    transition: opacity .5s ease-out;
    width: 100%;
    max-width: 200px;
  }
  &.show {
    opacity: 1;
    & .loading__svg {
      opacity: 1;
    }
  }
  &.hide {
    opacity: 0;
    & .loading__svg {
      opacity: 0;
    }
  }
}
</style>