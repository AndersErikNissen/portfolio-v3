<template>
  <main>
    <h2>Show Page Content</h2>
    {{ pageACF }}
  </main>
</template>

<script>
export default {
  name: "TemplateCaseStudie",
  props: {
    case: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getCase() {
      return this.$store.state.cases.find((item) => item.slug === this.case);
    },
    pageACF() {
      let acf = {};
        const pageData = this.getCase;
        if (pageData) {
          acf = pageData.acf;
        }
      return acf;
    },
  },
  methods: {
    async checkPageData() {
      // If getCase is false, loadAll to make sure if it exist in the Database. If there still are no data, then push.(/notfound).
      if (!this.getCase) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadAll", 0);
          if (!this.getCase && this.loading === true) {
            this.$router.push("/notfound");
          }
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