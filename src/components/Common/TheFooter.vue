<template>
  <footer class="flex center column pack">
    <section class="flex column center">
      <h2 class="clamp--small center-txt">Vil du vide mere om mig, eller i kontakt?</h2>
      <router-link to="/kontakt" class="btn round"
        ><span>KONTAKT MIG</span></router-link
      >
    </section>
    <article class="footer__soMePack flex center">
      <a
        :href="some.link"
        class="flex row"
        v-for="some in getSoMe"
        :key="some.title"
        target="_blank"
      >
        <h4 class="clamp">
          {{ some.title }}
        </h4>
        <!-- 
            Require is used because:
            # If you use v-bind on src, it will not convert the path to fit in the vue structure:
            ## If require was not used the path to the images would look like this: <img src="@/assets/...">
            ## Which would not work since that path don't exist.
         -->
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
  background: var(--color-bg-first);
  background: linear-gradient(
    0deg,
    var(--color-bg-first) 25%,
    var(--color-bg-first-5) 100%
  );
  color: white;
  min-height: 60vh;
  padding: var(--padding-5);
}
article.footer__soMePack {
  margin: 3rem 0 0 0;
  @media screen and (max-width: 1024px) {
    & {
      flex-direction: column;
    }
  }
}
img {
  width: 30px;
  height: 30px;
}

a {
  color: inherit;
  text-decoration: underline;
  margin: 1rem;
  transition: transform 0.1s linear;
  &:hover,
  &:focus {
    color: var(--color-a-active);
    text-decoration-color: var(--color-a-active);
  }
  &:active {
    transform: scale(0.98);
  }
  @media screen and (max-width: 1024px) {
    & {
      margin: 0.5rem;
    }
  }
}
i {
  color: #df85f1;
}
</style>