<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <h1></h1>
    <div>
      <h2>
        {{ error }}
      </h2>
      <div>
        {{ pageACF.titletoh1 }}
      </div>
    </div>
    <hjem-cases></hjem-cases>

    <section>
      <!-- Skeleton Grid -->
      <h2>Loading...</h2>
    </section>
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
            If API call has 200 and this.loading = true, but have no data, something with the GET(URL) could have failed, like a wrong slug, so we redirect to the ErrorPage.
          */
          if (!this.getPage) {
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


