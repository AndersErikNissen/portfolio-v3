<template>
  <header class="template__description--outer flex">
    <section class="split--60">
      <h2>Hvad er {{ dataObj.title }}?</h2>
      <p>
        {{ dataObj.description }}
      </p>
    </section>
    <svg-import class="split--40" :dataObj="svgObj"></svg-import>
  </header>
</template>

<script>
import svgImport from "../SVG/SvgLogoContainer.vue";

export default {
  name: "TemplateDescription",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    svgImport,
  },
  computed: {
    svgObj() {
      let obj = false;

      if (this.dataObj.logo) {

        obj = {
          path: this.dataObj.logo,
          title: this.dataObj.title,
          color: this.dataObj.color,
        };

      }
      
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
.template__description--outer {
  section {
    padding-right: var(--padding-5);
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    section {
        padding: var(--padding-2);
    }
    & > * {
      width: 100%;
    }
  }
}
</style>