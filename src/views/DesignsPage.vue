<template>
  <main>
    <intro-header :dataObj="pageACF"></intro-header>
    <all-designs :useCase="useDesignsObj"></all-designs>
  </main>
</template>

<script>
import allDesigns from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
import introHeader from "../components/UI/Universal/UiIntroHeader.vue";
export default {
  name: "DesignsPage",
  components: {
    allDesigns,
    introHeader,
  },
  data() {
    return {
      loading: false,
      useDesignsObj: this.$store.state.staticData.universal.designs.all,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "Designs"
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
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>