<template>
  <main>
    <h2>Show Page Content</h2>
    {{ pageACF }}
  </main>
</template>

<script>
export default {
  name: "TemplateDesign",
  props: {
    design: {
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
    getDesign() {
      return this.$store.state.cases.find((item) => item.slug === this.design);
    },
    pageACF() {
      let acf = {};
        const pageData = this.getDesign;
        if (pageData) {
          acf = pageData.acf;
        }
      return acf;
    },
  },
  methods: {
    async checkPageData() {
      // If getDesign is false, loadAll to make sure if it exist in the Database. If there still are no data, then push.(/notfound).
      if (!this.getDesign) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadAll", 1);
          if (!this.getDesign && this.loading === true) {
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