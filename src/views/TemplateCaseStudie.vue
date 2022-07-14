<template>

  <main>

    <template-header v-if="getCase" :dataObj="getCase.case"></template-header>

    <the-arrow :clean="true"></the-arrow>

    <section v-if="getCase" class="sticky--main">

      <svg-top></svg-top>

      <section class="grid--template fill">

        <template-aside :dataObj="getCase.case"></template-aside>

        <section class="max-width">

          <template-description :dataObj="getCase.case"></template-description>
          <template-shell :dataObj="getCase.case.content"></template-shell>

        </section>

      </section>

      <section class="fill flex center column">

        <h2>Relaterede</h2>

        <show-cases
          :useCase="amountOfCases"
          :removeFromRange="getCase.index"
        ></show-cases>

      </section>

      <svg-bot></svg-bot>

    </section>

  </main>

</template>

<script>

import theArrow from "../components/Common/TheArrow.vue";
import svgTop from "../components/UI/SVG/SvgEdgeTop.vue";
import svgBot from "../components/UI/SVG/SvgEdgeBot.vue";
import templateAside from "../components/UI/Template/TemplateAside.vue";
import templateHeader from "../components/UI/Template/TemplateHeader.vue";
import templateDescription from "../components/UI/Template/TemplateDescription.vue";
import templateShell from "../components/UI/Template/TemplateSegmentShell.vue";
import showCases from "../components/UI/Universal/UiAllCasesOrDesigns.vue";

export default {
  name: "TemplateCaseStudie",
  props: {
    case: {
      type: String,
      required: true,
    },
  },
  components: {
    templateHeader,
    templateDescription,
    templateShell,
    templateAside,
    svgTop,
    svgBot,
    theArrow,
    showCases,
  },
  data() {
    return {
      loading: false,
      amountOfCases: this.$store.state.staticData.universal.cases.template,
    };
  },
  computed: {
    getCase() {

      // Find a case that match.
      // return this.$store.state.cases.find( item => item.slug === this.case );
      let this_case = this.$store.state.cases.find( item => item.slug == this.case );

      if ( this_case ) {
        
        /**
         * Index Walkthrough:
         * We need the index of the current case, so we can exclude it from the array that shows other Work.
         * Map returns a new array with false / true, depending on what I could find, like: [false,false,true].
         */

        return {
          case: this_case,
          index: this.$store.state.cases.map( item => item.slug == this.case ).indexOf( true )
        }

      } else {

        return null;

      }

    }
  },
  methods: {
    checkForCase() {

      // If therre are no Case found return to 404-page.
      if ( ! this.getCase ) {

        this.$router.push( "/notfound" );

      }

    }
  },
  mounted() {

    this.checkForCase();

    // Scroll to top on load.
    window.scrollTo( 0, 0 );

  },
  watch: {
    case: function () {

      // When Case changes check if a Case could be found.
      // - Might not be needed with the noApi?
      this.checkForCase();

    },
  },
};
</script>

<style lang="scss" scoped>
</style>