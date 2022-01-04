<template>
  <main>
    <the-loading :check="loadingCheck"></the-loading>
    <h2>Show Page Content</h2>
    {{ pageACF }}
  </main>
</template>

<script>
import theLoading from "../components/Common/TheLoading.vue"
export default {
  name: "TemplateDesign",
  props: {
    design: {
      type: String,
      required: true,
    },
  },
  components: {
    theLoading,
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
    loadingCheck() {
      let check = false;
      if(this.loading === false && !this.getDesign || this.getDesign === undefined) {
        check = true;
      }
      return check;
    },
  },
  methods: {
    async checkPageData() {
      // If getDesign is false, loadAll to make sure if it exist in the Database. If there still are no data, then push.(/notfound).
      if (!this.getDesign) {
        try {
          this.loading = true;
          await this.$store.dispatch("loadAll", 1);
          // If we have checked the data.array, tried loading the newest version from the API, and still no data, then something must be wrong.
          // - Like a wrong URL.
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
    window.scrollTo(0,0);
  },
   watch: {
    design: function () {
      // If the params, change, check the data inside store and the after (if not in store) API call. 
      // If the params is not in the data(getDesign() = undefined) 
      this.checkPageData();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>