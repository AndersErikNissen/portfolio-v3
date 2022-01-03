<template>
  <main>
    <hjem-textpack
      v-if="pageACF"
      :hero="true"
      :dataObj="objHero"
    ></hjem-textpack>
    <the-arrow></the-arrow>
    <section class="hjem__main sticky--main" v-if="pageACF">
      <svg-top></svg-top>
      <hjem-textpack class="fill air max-width flex center" :dataObj="objDesc"></hjem-textpack>
      <section class="fill air max-width flex center column">
        <div class="flex center">
          <h2>Seneste Arbejde</h2>
        </div>
        <hjem-cases :useCase="useCaseObj"></hjem-cases>
      </section>
      <svg-bot></svg-bot>
    </section>

    <section v-if="!pageACF && loading">
      <!-- Skeleton Grid -->
    </section>
  </main>
</template>

<script>
import theArrow from "../components/Common/TheArrow.vue"
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import hjemTextpack from "../components/UI/Hjem/HjemTextPack.vue";
import hjemCases from "../components/UI/Universal/UiAllCasesOrDesigns.vue";
export default {
  name: "HjemPage",
  components: {
    hjemTextpack,
    hjemCases,
    svgTop,
    svgBot,
    theArrow
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
    // Will reset window each time going from 1 router to another. There are some Vue ways to do it, but they didn't seem to work.
    // - I have also disabled smooth scrolling to the user don't have to watch the scrolling when changing router.
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>


