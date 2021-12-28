<template>
  <div>
    <img
      :src="require('@/assets/svg/' + svgPath)"
      :alt="'SVG med motivet:' + svgAlt"
    />
  </div>
</template>

<script>
export default {
  name: "SvgLoaderContainer",
  props: {
    svgPath: {
      type: String,
      required: true,
    },
    svgAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>