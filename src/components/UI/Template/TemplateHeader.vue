<template>
  <header :style="'background-color:' + dataObj.color + ';'">
    <h1>
      {{ dataObj.title }}
    </h1>
    <h2>
      {{ dataObj.year }}
    </h2>
    <svg-logo v-if="dataObj.svg_path" :dataObj="getLogo"></svg-logo>
  </header>
</template>

<script>
import svgLogo from "../SVG/SvgLogoContainer.vue";
export default {
  name: "TemplateHeader",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    svgLogo,
  },
  computed: {
    getLogo() {
      let obj = false;
      if(this.dataObj) {
        obj = {
          path: this.dataObj.svg_path,
          title: this.dataObj.title
        }
      }
      return obj;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>