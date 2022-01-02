<template>
  <router-link v-if="dataObj" :to="basePath + dataObj.slug">
    <!-- <article class="pack flex row--top"
    :style="'background-color:' + useACF.color + ';'"> -->
    <article
      class="pack flex row"
      :style="'background-color:' + useACF.color + ';'"
    >
    <!-- <article
      class="pack flex row"
      :style="'background-color:' + useACF.color + ';'"
    > -->
      <section class="display__textArea">
        <div>
          <h4 class="clamp">
            {{ useACF.title }}
          </h4>
          <div>
            <!-- <h6>Roller</h6> -->
            <p>
              {{ cleanRoles }}
            </p>
          </div>
        </div>
      </section>
      <img :src="useACF.mood" :alt="'Stemningsbillede til ' + useACF.title" />
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
      for (let i = 0; i < cleanArr.length - 1; i++) {
        cleanArr[i] += ", ";
      }
      // Turn Array into String format
      cleanArr.forEach((role) => (returnString += role));

      return returnString;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  margin: var(--margin-outer);
  @media screen and (min-width: 1025px) {
      &:nth-child(odd) {
          margin-left: 0;
      }
      &:nth-child(even) {
          margin-right: 0;
      }
  }
}
h4 {
    margin-bottom: 1rem;
}
article {
    color: white;
    border-radius: var(--border-round-edge);
& > * {
    width: 50%;
}
  & section {
    padding: var(--padding-5);
  }
}

img {
  max-width: 600px;
  height: auto;
}

.logo {
  position: relative;
  top: 0;
  left: 0;
}
</style>