<template>
  <section class="template__block--outer">
    <section class="template__block--title flex">
      <h2 class="clamp--small">
        {{ useObj.title }}
      </h2>
      <img class="stageIcon" :src="useObj.svg" alt="SVG fil med animation" />
    </section>
    <section class="template__block--textArea">
      <p v-html="dataObj.text">
      </p>
    </section>
    <div>
      <img v-if="dataObj.img" class="content-img" :src="require( '@/assets/images/content_imgs/' + dataObj.img )" alt="">
    </div>
  </section>
</template>

<script>

import svgFirst from "@/assets/svg/CasesChallenge.svg";
import svgSecond from "@/assets/svg/CasesDesign.svg";
import svgThird from "@/assets/svg/CasesProcess.svg";

export default {
  name: "TemplateSegment",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      svgFirst,
      svgSecond,
      svgThird,
    };
  },
  computed: {
    useObj() {

      let obj = {
        svg: undefined,
        title: undefined,
      };

      switch (this.index) {
        case 0: {
          obj.svg = this.svgFirst;
          obj.title = "Udfordringen";
          break;
        }
        case 1: {
          obj.svg = this.svgSecond;
          obj.title = "Designet";
          break;
        }
        case 2: {
          obj.svg = this.svgThird;
          obj.title = "Løsningen";
          break;
        }
        default:
          obj.svg = this.svgFirst;
          obj.title = "No Title";
      }

      return obj;
    },
  },
}
</script>

<style lang="scss" scoped>
.template__block--outer {
  margin: calc(var(--margin-5) * 3) 0;
  & .template__block--title {
      align-items: center;
      margin: calc(var(--margin-large) / 3) 0;
  }
  & img.stageIcon {
    width: 100px;
    margin-left: var(--margin-5);
  }

  & img.content-img {
    max-width: 65ch;
  }

  @media screen and (max-width: 620px) {
    padding: var(--padding-5);
    & img.stageIcon {
      width: 70px;
    }
  }
}
</style>