<template>
  <header :style="headerStyle" class="sticky--hero flex">
    <section class="template__header--textArea flex column">
      <h1 class="clamp">
        {{ dataObj.title }}
      </h1>
      <h2 class="clamp--small">
        {{ dataObj.year }}
      </h2>
      <h2>

      </h2>
    </section>
    <img :src="getImage" alt="" />
  </header>
</template>

<script>
export default {
  name: "TemplateHeader",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // Passing an object with all the styles, can make styling a bit more easy to adjust, and get an overview over.
      headerStyle: {
        backgroundColor: this.dataObj.color,
        // Require is used since it's a dynamic path.
        // backgroundImage: 'url(' + this.dataObj.mood + '), url(' + require('@/assets/svg/logos/' + this.dataObj.svg_path) + ')',
        // backgroundImage: 'url(' + require('@/assets/svg/logos/' + this.dataObj.svg_path) + ')',
        // backgroundImage: 'url(' + this.dataObj.mood + ')',
      },
    };
  },
  computed: {

    getImage() {
      
      // Placeholder Image
      let get_placeholder =  require( '@/assets/images/mood_imgs/placeholder.png' );

      if ( this.dataObj.mood_img != "" ) {

        // Try and require the Image
        let get_img = require( '@/assets/images/mood_imgs/' + this.dataObj.mood_img );


        if ( get_img ) {

          // If we find an image return it.
          return get_img;

        } else {

          // If not return an empty string
          return get_placeholder;
        }

      } else {

        return get_placeholder;

      }

    },

    getLogo() {
      let obj = false;
      if (this.dataObj) {
        obj = {
          path: this.dataObj.svg_path,
          title: this.dataObj.title,
        };
      }
      return obj;
    },
    roleArray() {
      let newArray = [];
      this.dataObj.roles.forEach((role) => {
        if (role != "") newArray.push("#" + role);
      });
      return newArray;
    },
  },
  methods: {
     getTop() {
      // If hero is true, set where the sticky--hero should stop at(top);
      let hero_element =  document.querySelector( ".sticky--hero" );

      if ( this.hero && hero_element ) {
        let 
        eleHeight = hero_element.offsetHeight,
        winHeight = window.innerHeight;

        
        // # 1 caviart, is that with this method the hero have to be at least 100vh, otherwise there will be space on top.
        hero_element.style.top = winHeight - eleHeight + "px";
      }
    },
    setColor() {
      this.headerStyle.backgroundColor = this.dataObj.color;
    }
  },
  mounted() {
    this.getTop();
  },
  watch: {
    windowWidth() {
      // If the windowWidth changes, update the position: sticky > top.
      this.getTop();
    },
    dataObj() {
      this.setColor();
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  color: var(--color-font-second);
  &.flex {
    justify-content: space-evenly;
    align-items: center;
  }
  & > * {
    width: 50%;
    &:nth-child(1) {
      padding: 0 var(--padding-5);
    }
  }
  & li {
    margin-right: 1rem;
  }
  @media screen and (max-width: 1024px) {
    &.flex {
      flex-direction: column;
      justify-content: space-evenly;
    }
    & .template__header--textArea {
      justify-content: center;
      align-items: flex-start;
    }
    & > * {
      width: 100%;
    }
  }
}
img {
  max-width: 600px;
}
</style>