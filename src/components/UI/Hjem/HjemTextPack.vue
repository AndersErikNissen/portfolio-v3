<template>
  <!--
        2 use cases:
        # If used in hjem Hero, hero = true and it will have the link to the pdf.
        # If NOT used in Hero but used in hjem Desc, hero = false, and it will have a link to /profil. 
     -->
  <section
    :class="['hjem__outerPack', hero ? 'sticky--hero flex center' : '']"
    ref="heroHeight"
  >
    <section
      :class="[
        'hjem__contentPack',
        hero ? 'flex center hjem__inner--hero' : '',
      ]"
    >
      <!-- Will always have "hjem__textPack", but depending on hero's value the next class will change to match -->
      <div
        :class="[
          'hjem__textPack',
          hero ? 'hjem__layout--hero' : 'hjem__layout--desc',
        ]"
      >
        <section>
          <h1 v-if="hero" class="clamp--small">
            {{ dataObj.title }}
          </h1>
          <h2 v-else>
            {{ dataObj.title }}
          </h2>
          <p>
            {{ dataObj.description }}
          </p>
          <a v-if="hero" href="@/assets/pdf/aen_cv.pdf" download class="btn round"> <span>DOWNLOAD CV</span></a>
          <router-link v-else to="/profil" class="btn round"><span>LÆS MERE</span></router-link>
        </section>
      </div>
      <div class="hjem__svg">
        <img
          v-if="hero"
          :src="svgCity"
          alt="En by med et blødt moster, som ser sød og imødekommende ud. (SVG fil med animation)"
        />
        <img
          v-else
          :src="svgDesk"
          alt="En by med et blødt moster, som ser sød og imødekommende ud. (SVG fil med animation)"
        />
      </div>
    </section>
  </section>
</template>

<script>
import heroSvg from "@/assets/svg/CodeCity.svg";
import deskSvg from "@/assets/svg/FlyingDesk.svg";
export default {
  name: "HjemHero",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    hero: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      svgCity: heroSvg,
      svgDesk: deskSvg,
    };
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    getTop() {
      // If hero is true, set where the sticky--hero should stop at(top);
      if (this.hero) {
        let ele = document.querySelector(".sticky--hero"),
          eleHeight = ele.offsetHeight,
          winHeight = window.innerHeight;
        ele.style.top = winHeight - eleHeight + "px";
      }
    },
  },
  watch: {
    windowWidth() {
      // If the windowWidth changes, update the position: sticky > top.
      this.getTop();
    }
  },
  mounted() {
    this.getTop();
  },
};
</script>

<style lang="scss" scoped>
.hjem__contentPack {
  flex-direction: row;
}
.hjem__inner--hero .hjem__svg,
.hjem__inner--hero .hjem__textPack {
  width: 50%;
}
.hjem__inner--hero .hjem__svg {
  min-width: 500px;
}

@media screen and (max-width: 1024px) {
  .hjem__contentPack {
    flex-direction: column;
    padding: var(--padding-5);
  }
  
  .hjem__inner--hero .hjem__svg,
  .hjem__inner--hero .hjem__textPack {
    width: 100%;
  }
  .hjem__inner--hero .hjem__svg {
    min-width: 0px;
  }

}
</style>