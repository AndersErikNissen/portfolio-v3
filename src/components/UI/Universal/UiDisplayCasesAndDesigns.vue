<template>

  <router-link v-if="dataObj" :to="basePath + dataObj.slug">

    <article class="pack flex row" :style="'background-color:' + dataObj.color + ';'">

      <section class="display__textArea">

        <div>

          <h4 class="clamp">
            {{ dataObj.title }}
          </h4>

          <div>
      
            <p>
              {{ outputTheRoles }}
            </p>

          </div>

        </div>

      </section>

      <img :src="getImage" :alt="'Stemningsbillede til ' + dataObj.title" />

    </article>

  </router-link>

</template>

<script>
export default {
  name: "UiDisplayContainer",
  props: {
    dataObj: {
      type: Object,

      // Set required to: false. So VUE won't flip out if it only get 1 dataObj.
      required: false,
    },
    basePath: {
      type: String,
      
      // Set required to: false. So VUE won't flip out if it only get 1 dataObj.
      required: false,
    },
  },
  computed: {

    getImage() {
      
      // Placeholder Image
      let get_placeholder =  require( '@/assets/images/mood_imgs/placeholder.png' );

      if ( this.dataObj.mood_img != "" ) {

        // Try and require the Image
        let get_img = require( '@/assets/images/mood_imgs/' + this.dataObj.mood_img );


        if ( get_img ) {

          // If we find an image return it.
          return get_img;

        } else {

          // If not return an empty string
          return get_placeholder;
        }

      } else {

        return get_placeholder;

      }

    },

    outputTheRoles() {
      let 
      allRoles = this.$store.state.roles,
      caseRoleNumbers = this.dataObj.roles;

      // Return String
      let returnString = "";

      // Match to roles
      caseRoleNumbers.forEach( ( roleNumber, index ) => {

        let baseString = allRoles[ roleNumber ];

        // Add ", " if it's not the last role.
        if ( index != caseRoleNumbers.length - 1 ) {
          
          returnString += baseString + ", ";

        } else {

          returnString += baseString;

        }

      } );

      // Remove last ", " using RegEx ( $ is the end of the string ). Doesn't seem to work?
      // returnString.replace( '/, $/', '' );

      // Return result
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
    .grid--2x2 &:nth-child(odd) {
      margin-left: 0;
    }
    .grid--2x2 &:nth-child(even) {
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
  transition: transform 0.2s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(0.98);
  }
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
</style>