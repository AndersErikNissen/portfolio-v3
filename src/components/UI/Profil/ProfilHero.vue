<template>

  <section :style="'background-image: url(' + bgSvg + ');'" class="profil__heroPack--outer flex center heroBg">
    
    <section class="profil__hero--content flex">

      <section>

        <h1>
          {{ dataObj.title }}
        </h1>

        <p>
          {{ dataObj.description }}
        </p>

      </section>

      <div>
        <img :src="dataObj.profile_img" alt="Profilbillede af AEN" />
      </div>

    </section>
    
  </section>

</template>

<script>

import bgSvg from "@/assets/svg/BackgroundClouds.svg";

export default {
  name: "ProfilHero.vue",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bgSvg,
    }
  },
  methods: {
    getTop() {
      let ele = document.querySelector(".sticky--hero"),
        eleHeight = ele.offsetHeight,
        winHeight = window.innerHeight;
      // # 1 caviart, is that with this method the hero have to be at least 100vh, otherwise there will be space on top.
      ele.style.top = winHeight - eleHeight + "px";
    },
  },
  watch: {
    windowWidth() {
      // If the windowWidth changes, update the position: sticky > top.
      this.getTop();
    },
  },
  mounted() {
    this.getTop();
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 600px;
}
.profil__heroPack--outer {
  background-size: cover;
   background-repeat: no-repeat;
}
.profil__hero--content {
  color: var(--color-font-second);
  & > * {
    width: 50%;
    padding: var(--padding-2);
  }
  @media screen and (max-width: 1024px) {
    & {
      flex-direction: column;
    }
    & > * {
      width: 100%;
    }
  }
}
</style>