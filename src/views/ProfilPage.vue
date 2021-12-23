<template>
  <main>
    <profil-hero :dataObj="heroObj"></profil-hero>
  </main>
</template>

<script>
import profilHero from '../components/UI/Profil/ProfilHero.vue'
export default {
  name: "ProfilPage",
  components: {
    profilHero,
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
      let obj = {},
      check = this.pageACF;
      if(check) {
        obj = {
          title: check.title,
          description: check.description,
          img: check.images[0]
        }
      }
      return obj;
    },
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
  },
};
</script>

<style lang="scss" scoped>
</style>