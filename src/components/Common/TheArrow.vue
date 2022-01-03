<template>
  <div id="arrowPack" class="flex center">
    <arrow-svg
      id="arrow"
      svgPath="arrow_down_v3.svg"
      svgAlt="Arrow"
      @click="scrollToView"
    ></arrow-svg>
  </div>
</template>

<script>
import arrowSvg from "../UI/SVG/SvgLoaderContainer.vue";
export default {
  name: "TheArrow",
  components: {
    arrowSvg,
  },
  methods: {
    scrollToView() {
      // Help from Stackoverflow: https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component;
      let view = document.querySelector(".sticky--main"),
        viewTop = view.offsetTop + 100;
      console.log("CLICK!", view, viewTop);

      window.scrollTo({
        top: viewTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#arrowPack {
  position: fixed;
  bottom: 1rem;
  left: 0;
  width: 100%;
  & #arrow {
    width: 50px;
    height: auto;
    cursor: pointer;
  }
}
</style>