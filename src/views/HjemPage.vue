<template>
  <main>

    <transition name="opa">
      <the-loading v-if="loading"></the-loading>
    </transition>

    <hjem-textpack
      :hero="true"
      :dataObj="hero_data"
    ></hjem-textpack>

    <the-arrow></the-arrow>

    <section class="hjem__main sticky--main">

      <svg-top></svg-top>

      <hjem-textpack
        class="fill air max-width flex center"
        :dataObj="intro_data"
      ></hjem-textpack>

      <section class="fill air max-width flex center column">

        <div class="flex center">
          <h2 class="clamp">Seneste Arbejde</h2>
        </div>

        <hjem-cases :useCase="useCaseObj"></hjem-cases>
      
      </section>

      <svg-bot></svg-bot>

    </section>
    
  </main>
</template>

<script>
import theLoading from "../components/Common/TheLoading.vue";
import theArrow from "../components/Common/TheArrow.vue";
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
    theArrow,
    theLoading,
  },
  data() {
    return {
      error: false,
      loading: false,
      useCaseObj: this.$store.state.staticData.universal.cases.hjem,
      currentPageData: this.$store.state.main.frontpage,
    };
  },
  computed: {
    hero_data() { return this.currentPageData.hero; },
    intro_data() { return this.currentPageData.intro; }


    //getId() {
    //   //From state.nav find what ID matched with Hjem.
    //   return this.$store.state.staticData.nav.find(
    //     (item) => item.title === "Hjem"
    //   );
    // },
    // getPage() {
    //   return this.$store.state.main.find(
    //     (item) => item.id === this.getId.WPpost
    //   );
    // },
    // pageACF() {
    //   let acf = {};
    //   const pageData = this.$store.state.main.find(
    //     (item) => item.id === this.getId.WPpost
    //   );

    //   if (pageData) {
    //     acf = pageData.acf;
    //   }
    //   return acf;
    // },
    // objHero() {
    //   let obj = {};
    //   if (this.pageACF) {
    //     obj = {
    //       title: this.pageACF.titletoh1,
    //       description: this.pageACF.descriptiontoh1,
    //     };
    //   }
    //   return obj;
    // },
    // objDesc() {
    //   let obj = {};
    //   if (this.pageACF) {
    //     obj = {
    //       title: this.pageACF.titletoh2,
    //       description: this.pageACF.descriptiontoh2,
    //     };
    //   }
    //   return obj;
    // },
  },
  methods: {
    
  },
  mounted() {

    // Will reset window each time going from 1 router to another. There are some Vue ways to do it, but they didn't seem to work.
    // - I have also disabled smooth scrolling to the user don't have to watch the scrolling when changing router.
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
</style>


