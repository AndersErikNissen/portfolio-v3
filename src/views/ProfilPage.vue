<template>
  <main>

    <profil-hero
      v-if="heroObject"
      :dataObj="heroObject"
      class="sticky--hero bgSvg"
    ></profil-hero>

    <the-arrow></the-arrow>

    <profil-content
      v-if="contentObject"
      :dataArr="contentObject"
      class="sticky--main"
    ></profil-content>

  </main>
</template>

<script>

import theArrow from "../components/Common/TheArrow.vue";
import profilHero from "../components/UI/Profil/ProfilHero.vue";
import profilContent from "../components/UI/Profil/ProfilContent.vue";

export default {
  name: "ProfilPage",
  components: {
    profilHero,
    profilContent,
    theArrow,
  },
  data() {
    return {
      loading: false,
      currentPageData: this.$store.state.main.profil
    };
  },
  computed: {
    heroObject() {
      return this.currentPageData.hero;
    },
    contentObject() {
      return this.currentPageData.content;
    }
  },
  methods: {
   
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>