<template>
  <main>
    <profil-hero v-if="heroObj" :dataObj="heroObj" class="sticky--hero"></profil-hero>
    <the-arrow></the-arrow>
    <profil-content v-if="contentArr" :dataArr="contentArr" class="sticky--main"></profil-content>
  </main>
</template>

<script>
import theArrow from "../components/Common/TheArrow.vue"
import profilHero from '../components/UI/Profil/ProfilHero.vue'
import profilContent from '../components/UI/Profil/ProfilContent.vue'
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
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "Profil"
      );
    },
    getPage() {
      return this.$store.state.main.find(
        (item) => item.id === this.getId.WPpost
      );
    },
    pageACF() {
      let acf = {};
      const pageData = this.$store.state.main.find(
        (item) => item.id === this.getId.WPpost
      );
      if (pageData) {
        acf = pageData.acf;
      }
      return acf;
    },
    heroObj() {
      let obj = false,
      check = this.pageACF; 
      if(check.title) {
        obj = {
          title: check.title,
          description: check.description,
          img: check.images[0]
        }
      }
      return obj;
    },
    contentArr() {
      let 
      arr = false;
      if (this.pageACF.text_areas && this.pageACF.text_areas.length > 0) {
        arr = this.pageACF.text_areas;
      }
      return arr;
    }
  },
  methods: {
    async checkPageData() {
      // Check if the getPage can find some data that matches, because then we don't need to make an API call.
      if (!this.getPage) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadSinglePost", this.getId.WPpost);
        } catch (e) {
          this.$router.push("/notfound");
        }
        this.loading = false;
      }
    },
  },
  mounted() {
    this.checkPageData();
    window.scrollTo(0,0);
  },
};
</script>

<style lang="scss" scoped>
</style>