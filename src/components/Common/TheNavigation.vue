<template>
  <section id="nav">
    <section id="nav__bar" class="flex row--sb pack">
      <router-link to="/">
        <div>
          <img :src="AENLogo" alt="AEN Logo" />
        </div>
      </router-link>
      <ul v-if="isDesktop" class="flex row clean">
        <li v-for="item in skipFirst" :key="item.title">
          <router-link :to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <div v-else id="hamburger">
        <button @click="toggleBurger">Button</button>
      </div>
    </section>

    <!-- Mobile Menu -->
    <section
      v-if="!isDesktop"
      id="nav__mobile--menu"
      :class="[
        'fixed',
        'zero--100',
        'flex',
        'center',
        isBurger ? 'display--flex' : 'display--none',
      ]"
    >
      <div>HeLLO!!!</div>
    </section>
  </section>
</template>

<script>
import AENLogo from "../../assets/images/aen_logo_simple_1.png";

export default {
  name: "TheNavigation",
  data() {
    return {
      navData: this.$store.state.nav,
      AENLogo,
      windowWidth: this.$store.state.windowWidth,
      isBurger: false,
    };
  },
  computed: {
    skipFirst() {
      //Exclude Hjem when creating navigation UL.
      const newList = [];
      for (let i = 1; i < this.navData.length; i++) {
        newList.push(this.navData[i]);
      }
      return newList;
    },
    isDesktop() {
      if (this.$store.state.windowWidth >= 1024) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    toggleBurger() {
      this.isBurger = !this.isBurger;
      console.log(this.isBurger, "WOOP");
    },
  },
  created() {
    console.log(this.$store.state.nav);
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 1rem 0;
}
img {
  width: 50px;
}

// Menu
#nav__bar {
  /*
    Note to self:
    # Z-index works with display: flex, but only for the children of the flex-parent.
    # If I want to change the parten it needs to have something like postion: relative.
  */
  display: flex;
  z-index: 1;
}
#nav__mobile--menu {
  background-color: var(--color-bg-first);
}
</style>