<template>
  <section id="nav">
    <section id="nav__bar" class="flex row--sb pack">
      <router-link v-if="isDesktop" to="/">
        <div>
          <img :src="AENLogo" alt="AEN Logo" />
        </div>
      </router-link>
      <router-link @click="toggleOff" v-else to="/">
        <div>
          <img :src="AENLogo" alt="AEN Logo" />
        </div>
      </router-link>
      <ul v-if="isDesktop" class="desktop flex row clean">
        <li v-for="item in skipFirst" :key="item.title">
          <router-link :to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <div v-else id="hamburger">
        <hamburger-icon @click="toggleBurger"></hamburger-icon>
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
        animateBG ? 'active' : '',
      ]"
    >
      <div id="bg__circle"></div>
      <section>
        <ul
          class="flex column center clean"
          :class="[
            'flex',
            'column',
            'center',
            'clean',
            showMenu_nonDesktop ? 'endY' : 'startY',
          ]"
        >
          <li @click="toggleOff" v-for="item in skipFirst" :key="item.title">
            <router-link :to="item.path">
              <h2 class="clamp slide">
                <span>
                  {{ item.title }}
                </span>
              </h2>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import AENLogo from "../../assets/images/aen_logo_simple_1.png";
import hamburgerIcon from "../UI/SVG/HamburgerIcon.vue";

export default {
  name: "TheNavigation",
  data() {
    return {
      navData: this.$store.state.staticData.nav,
      AENLogo,
      windowWidth: this.$store.state.windowWidth,
      isBurger: false,
      animateBG: false,
      showMenu_nonDesktop: false,
    };
  },
  components: {
    hamburgerIcon,
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
      // In order to animate something that goes from block / none, there has to be a delay, otherwise the animation will not be run after changing display.
      // We can use setTimeout because we know how long the animations are, and have the delay be 30ms (Just to be sure).
      if (this.isBurger === false) {
        this.isBurger = true;
        setTimeout(() => {
          this.showMenu_nonDesktop = true;
          this.animateBG = true;
        }, 30);
      } else {
        this.animateBG = false;
        this.showMenu_nonDesktop = false;
        setTimeout(() => {
          this.isBurger = false;
        }, 1030);
      }
    },
    toggleOff() {
      // For when click on any of the links, it should reset the Menu.
      const div = document.querySelector("#hamburgerDiv"); // Not Scoped, remember!
      div.classList.remove("active");
      div.classList.add("inactive");

      this.animateBG = false;
      this.showMenu_nonDesktop = false;
      setTimeout(() => {
        this.isBurger = false;
      }, 1030);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_mixins.scss";

#nav {
  padding: 1rem 0;
  width: 100%;
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
  width: 100%;
  z-index: 3;
}
#nav {
  position: fixed;
  // Sticky could be used instead of fixed, since fixed removes the element from the document flow, like absolute.
  top: 0;
  left: 0;
  z-index: 3;
}
#nav__mobile--menu {
  z-index: 1;
  // background-color: var(--color-bg-first);
  & section {
    z-index: 2;
  }
}
span {
  width: 100%;
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.21, 0.64, 0.62, 0.89);

  .startY & {
    transform: translateY(100%);
  }
  .endY & {
    transition-delay: 0.2s;
    transform: translateY(0%);
  }
  .endY li:nth-child(2) & {
    transition-delay: 0.3s;
  }
  .endY li:nth-child(3) & {
    transition-delay: 0.4s;
  }
  .endY li:nth-child(4) & {
    transition-delay: 0.5s;
  }
}

#bg__circle {
  border-radius: 50%;
  background-color: var(--color-bg-first);
  width: 50px;
  height: 50px;

  position: fixed;
  top: -50px;
  right: -50px;
  transform-origin: center;
  transition: transform 0.8s linear;

  .active & {
    transform: scale(100);
  }
}
</style>