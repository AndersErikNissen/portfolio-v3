<template>
  <footer>
    <section>
        <h2>Vil du vide mere om mig, eller i kontakt?</h2>
        <router-link to="/kontakt">KONTAKT</router-link>
    </section>
    <article class="footer__soMePack" v-for="some in getSoMe" :key="some.title">
      <a :href="some.link">
        <h3>
          {{ some.title }}
        </h3>
        <!-- 
            Require is used because:
            # If you use v-bind on src, it will not convert the path to fit in the vue structure:
            ## If require was not used the path to the images would look like this: <img src="@/assets/...">
            ## Which would not work since that path don't exist.
         -->
        <img
          :src="require('@/assets/icons/' + some.icon)"
          :alt="'Ikon til mit sociale medie: ' + some.title"
        />
      </a>
    </article>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {};
  },
  computed: {
    getSoMe() {
      return this.$store.state.staticData.soMe;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>