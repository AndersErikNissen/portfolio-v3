<template>
  <main>
    <transition name="opa">
      <the-loading v-if="loading"></the-loading>
    </transition>
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