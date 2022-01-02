<template>
  <router-link v-if="dataObj" :to="basePath + dataObj.slug">
    <!-- <article class="pack flex row--top"
    :style="'background-color:' + useACF.color + ';'"> -->
    <article class="pack"
    :style="'background-image:url(' + useACF.mood + '); background-color:' + useACF.color + ';'">
      <section class="display__textArea">
        <div>
          <h4>
            {{ useACF.title }}
          </h4>
          <div>
            <h5>Roller</h5>
            <p>
              {{ cleanRoles }}
            </p>
          </div>
        </div>
      </section>
      <!-- <img :src="useACF.mood" :alt="'Stemningsbillede til ' + useACF.title" /> -->
    </article>
  </router-link>
</template>

<script>
export default {
  name: "UiDisplayContainer",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },
  computed: {
    useACF() {
      return this.dataObj.acf;
    },
    cleanRoles() {
      let cleanArr = [],
        returnString = "";
      this.dataObj.acf.roles.forEach((role) => {
        if (role != "") {
          cleanArr.push(role);
        }
      });
      // Add ", " to all expept the last element in the array.
      for(let i = 0; i < cleanArr.length - 1; i++) {
          cleanArr[i] += ", ";
      }
      // Turn Array into String format
      cleanArr.forEach(role => returnString += role)
        
      return returnString;
    },
  },
};
</script>

<style lang="scss" scoped>
.display__textArea {
    // &::before {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 50%;
    //     height: 100%;
    //     background-color: red;
    // }
}
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
}
article {
height: 100%;
min-height: 300px;
width: 100%;

  background-position: center;
  background-size: cover;
  & section {
    padding: var(--padding-5);
  }
}

img {
  max-width: 400px;
  height: auto;
}

.logo {
  position: relative;
  top: 0;
  left: 0;
}
</style>