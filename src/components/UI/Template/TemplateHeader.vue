<template>
  <header :style="headerStyle" class="sticky--hero flex">
    <section class="flex column">
      <h1>
        {{ dataObj.title }}
      </h1>
      <h2>
        {{ dataObj.year }}
      </h2>
    </section>
    <img :src="dataObj.mood" alt="" />
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
  & li {
    margin-right: 1rem;
  }
}
img {
  max-width: 600px;
}
</style>