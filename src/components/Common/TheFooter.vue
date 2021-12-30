<template>
  <footer class="flex center column">
    <section class="flex column center">
      <h2 class="clamp-small">Vil du vide mere om mig, eller i kontakt?</h2>
      <router-link to="/kontakt">KONTAKT MIG</router-link>
    </section>
    <article class="footer__soMePack flex row center">
      <a :href="some.link" class="flex row" v-for="some in getSoMe" :key="some.title">
        <h4 class="clamp">
          {{ some.title }}
        </h4>
        <!-- 
            Require is used because:
            # If you use v-bind on src, it will not convert the path to fit in the vue structure:
            ## If require was not used the path to the images would look like this: <img src="@/assets/...">
            ## Which would not work since that path don't exist.
         -->
        <!-- <img
          :src="require('@/assets/icons/' + some.icon)"
          :alt="'Ikon til mit sociale medie: ' + some.title"
        /> -->
      </a>
    </article>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    getSoMe() {
      return this.$store.state.staticData.soMe;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--color-bg-first);
  color: white;
  min-height: 60vh;
  padding: var(--padding-5);
}
article {
  margin: 3rem 0 0 0;
}
a {
  color: inherit;
  text-decoration: underline;
  margin: 1rem;
}
img {
  width: 30px;
  height: 30px;
}
</style>