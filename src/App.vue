<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <hero-hero></hero-hero>
</template>

<script>
import HeroHero from "./Layouts/HomePage/HomepageHero.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HeroHero,
  },
  methods: {
    loginPOST: function () {
      axios.post("https://skole.aenders.dk/wp-json/jwt-auth/v1/token", {
        username: "api.user",
        password: "API-key-1234#!",
      })
      .then((response) => {
        localStorage.skoleToken = response.data.token;
      });
    },
    getPosts: function () {
      axios.get("https://skole.aenders.dk/wp-json/wp/v2/posts/2596?status=private&per_page=50", {
        headers: {
          "Authorization": "Bearer " + localStorage.skoleToken
        }
      })
      .then((response) => {
        console.log(response.data)

      })
    }
  },
  created() {
    this.loginPOST();
    this.getPosts();
  }
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*
  CSS Variables
*/
:root {
  /* 
        Colors
    */
  --color-first: red;
  --color-second: blue;
  --color-bg-first: yellow;
  --color-font: black;
  --color-a: black;
  /* 
        Typo
    */
  --font-header-weight: 700;
  --a-weight: 400;
  --a-size: 1.5rem;
  /* 
    Spacing
  */
  --padding: 1rem;
  --padding-normal: var(--padding) * 2;
}

/* 
  Normalize and Standard Values
*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
*,
:before, // Single Quote should be best-use since old browsers still don't use double.
:after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;

  font-family: "Montserrat", sans-serif;
}
body {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;

  font-size: 100%;
  line-height: 1.5;
  font-weight: 400;
  color: --color-font;
}
ul {
  &.clean {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
picture,
img {
  width: 100%;
  height: 100%;
  display: block;
}
button {
  background-color: inherit;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

/* 
  Font
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: --font-header-weight;
}
h1 {
  font-size: clamp(3.8rem, 10vw, 6rem);
  // Diffrent Line-height could be relevant on all headers    .
}
h2 {
  font-size: 3.5rem;
}
h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2.5rem;
}
h5 {
  font-size: 2rem;
}
h6 {
  font-size: 1.5rem;
}

/*
    Text Sizing
*/
.small-txt {
  font-size: 0.75rem;
}
.bold,
b {
  font-weight: 700;
}
.italic {
  font-style: italic;
}
a {
  color: --color-a;
  font-size: --a-size;
  font-weight: --a-weight;

  text-decoration: none;
  &.underline {
    text-decoration: underline;
  }
  &:hover,
  &:focus {
    transition: 0.3s linear;
    transform: scale(1.1);
  }
}
.uppercase {
  text-transform: uppercase;
}

/* 
  Global Class'
*/
.pack {
  width: 100%;
  height: auto;
  position: relative; // If child elements need to use position: absolute.
  // Could use a max-width.
}

// Flex
.flex {
  display: flex;

  &.center {
    justify-content: center;
    align-items: center;
  }
  &.column {
    flex-direction: column;
    &--sb {
      justify-content: space-between;
    }
    &--sa {
      justify-content: space-around;
    }
    &--se {
      justify-content: space-evenly;
    }
  }
  &.row {
    flex-direction: row;
    &--sb {
      justify-content: space-between;
    }
    &--sa {
      justify-content: space-around;
    }
    &--se {
      justify-content: space-evenly;
    }
  }
  &.wrap {
    flex-wrap: wrap;
  }
}
</style>
