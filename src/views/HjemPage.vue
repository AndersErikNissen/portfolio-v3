<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <h1>
      {{ pageACF.titletoh1 }}
    </h1>

    <hjem-cases></hjem-cases>
  </main>
</template>

<script>
import hjemCases from "../components/UI/Hjem/HjemCases.vue";
export default {
  name: "HjemPage",
  components: {
    hjemCases,
  },
  data() {
    return {
      error: false,
      loading: false,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.staticData.nav.find(
        (item) => item.title === "Hjem"
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

          /*
            Earlier ErrorHandler: If API call has 200 and this.loading = true, but have no data, something with the GET(URL) could have failed, like a wrong slug, so we redirect to the ErrorPage.
            -- But it doesn't seem to be needed + If you clicked too quickly away from the View it would use the router.push("/notfound").
            if (!this.getPage) {
              this.$router.push("/notfound");
            }
          */
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


