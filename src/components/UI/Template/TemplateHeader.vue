<template>
  <header>
    <h1>
      {{ dataObj.title }}
    </h1>
    <div>
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
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
};
</script>

<style lang="scss" scoped>
</style>