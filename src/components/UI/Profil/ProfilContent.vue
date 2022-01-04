<template>
  <section>
    <svg-top></svg-top>
    <section class="fill flex center column">
      <div class="max-width">
        <profil-textblock
          v-for="textBlock in dataArr"
          :key="textBlock.title"
          :dataObj="textBlock"
        ></profil-textblock>
      </div>
    </section>
    <svg-bot></svg-bot>
  </section>
</template>

<script>
import svgTop from "../SVG/SvgEdgeTop.vue";
import svgBot from "../SVG/SvgEdgeBot.vue";
import profilTextblock from "./ProfilTextBlock.vue";
export default {
  name: "ProfilContent",
  components: {
    profilTextblock,
    svgTop,
    svgBot,
  },
  props: {
    dataArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>