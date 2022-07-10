<template>
  <div :style="'background-color:' + dataObj.color">
    <!-- 
            The require seems to be the best way to get a img/svg that has a dynamic path.
            - Not sure if it's the most optimal way, but I haven't been able to find another way to do it.
         -->
         <p>{{dataObj.logo_path}}</p>
    <img
      :src="require('@/assets/svg/logos/logo_' + dataObj.logo_path)"
      :alt="'Logo til projektet ' + dataObj.title"
    />
  </div>
</template>

<script>
export default {
  name: "UiSvgContainer",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: var(--padding-2);
  border-radius: var(--border-round-edge);
  @media screen and (max-width: 1024px) {
    padding: calc(var(--padding-5) * 2);
    border-radius: 0;
  }
}
</style>