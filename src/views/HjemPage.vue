<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <hjem-textpack
      v-if="pageACF"
      :hero="true"
      :dataObj="objHero"
    ></hjem-textpack>
    <section v-if="pageACF">
      <hjem-textpack :dataObj="objDesc"></hjem-textpack>
      <hjem-cases :useCase="useCaseObj"></hjem-cases>
    </section>

    <section v-if="!pageACF && loading">
      <!-- Skeleton Grid -->
    </section>
  </main>
</template>

<script>
import hjemTextpack from "../components/UI/Hjem/HjemTextPack.vue";
import hjemCases from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
export default {
  name: "HjemPage",
  components: {
    hjemTextpack,
    hjemCases,
  },
  data() {
    return {
      error: false,
      loading: false,
      useCaseObj: this.$store.state.staticData.universal.cases.hjem,
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
    objHero() {
      let obj = {};
      if (this.pageACF) {
        obj = {
          title: this.pageACF.titletoh1,
          description: this.pageACF.descriptiontoh1,
        };
      }
      return obj;
    },
    objDesc() {
      let obj = {};
      if (this.pageACF) {
        obj = {
          title: this.pageACF.titletoh2,
          description: this.pageACF.descriptiontoh2,
        };
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


