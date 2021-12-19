<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <h1>
      {{ loaded }}
    </h1>
    <div>
      <h2>
        {{ error }}
      </h2>
      <div>
        {{ pageACF.titletoh1 }}
      </div>
    </div>

    <section v-if="pageObj">
      <h1></h1>
      <hjem-cases></hjem-cases>
    </section>
    <section v-else>
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
      pageObj: undefined,
      cases: undefined,
      designs: undefined,
      error: undefined,
      loaded: false,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.nav.find((item) => item.title === "Hjem");
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
          await this.$store.dispatch("loadSinglePost", this.getId.WPpost);
          this.loaded = true;
          console.log("%c SUCCESS ", "background-color: green;");
          /*
            If API call has 200 and this.loaded = true, but have no data, something with the GET(URL) could have failed, like a wrong slug, so we redirect to the ErrorPage.
          */
          if (!this.getPage) {
            console.log("%c ERROR ", "background-color: red;");
            // this.$router.push('/notfound');
          }
        } catch (e) {
          // this.$router.push('/notfound');
        }
      }
    },
  },
  created() {},
  mounted() {
    // Could also make mounted async, if async functions wasn't being used.
    this.checkPageData();
  },
};
</script>

<style lang="scss" scoped>
</style>


