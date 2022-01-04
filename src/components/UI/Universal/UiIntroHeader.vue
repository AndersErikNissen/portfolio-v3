<template>
  <section
    :class="[
      'flex center column',
      email ? 'kontakt--style' : 'sticky--hero heroBg',
    ]"
  >
    <div>
      <h1 :class="email ? 'clamp--small' : ''">
        {{ dataObj.title }}
      </h1>
      <p class="large">
        {{ dataObj.description }}
      </p>
      <div v-if="email" id="aen_email" class="flex">
        <a
          class="btn round"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
          ><span
            >&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</span
          ></a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UiIntroHeader",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    email: {
      type: Boolean,
    },
    sticky: {
      type: Boolean,
    },
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
  },
  methods: {
    getTop() {
      // If hero is true, set where the sticky--hero should stop at(top);
      if (!this.email) {
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
    },
  },
  mounted() {
    this.getTop();
  },
};
</script>

<style lang="scss" scoped>
section {
  color: white;
  padding: var(--padding-5);
}
.kontakt--style {
  padding: var(--padding-normal);
}
div#aen_email {
  & span {
    color: inherit;
    text-decoration: none;
    font-size: calc(var(--font-btn) * 2);
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    & span {
    font-size: calc(var(--font-btn) * 1.2);
  }
  }
}
</style>