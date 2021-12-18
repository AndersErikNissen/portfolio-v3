<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <section v-if="pageObj">
      <h1>
        {{ pageObj.acf.titletoh1 }}
      </h1>
      <ul>
        <li v-for="item in whileLibrary" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
    <section v-else>
      <!-- Skeleton Grid -->
    </section>
  </main>
</template>

<script>
export default {
  name: "HjemPage",
  data() {
    return {
      pageObj: undefined,
    };
  },
  computed: {
    getId() {
      //From state.nav find what ID matched with Hjem.
      return this.$store.state.nav.find((item) => item.title === "Hjem");
    },
    getLib() {
      return this.$store.state.library;
    },
    whileLibrary() {
      // Check Library and get a surtain amount of objects from the array - randomly.
      const arrMount = 3;
      let returnArray = [],
      randomArray = [];

      while (returnArray < arrMount) {
        let 
        // Get a random number in the range of 0 - arrMount.
        randomNumber = Math.floor(Math.random() * 2),
        // If the randomNumber is in the randomArray, then don't push.
        checkArr = randomArray.find(rndNmb => rndNmb  === randomNumber);
        if (!checkArr) {
          randomArray.push(randomNumber);
          // returnArray.push(this.getLib[randomNumber]);
        }
      }
      return returnArray;
    },
  },
  methods: {
    getPageData() {
      // this.$router.push("/notfound")
      this.$store
        .dispatch("GET_API_DATA", { id: this.getId.WPpost })
        .then((res) => {
          this.pageObj = res;
        })
        .catch((error) => {
          console.log(
            "%c " + this.getId.title + " .Catch",
            "background-color:red; color:white;",
            error.message
          );
          //If there is an error, that means data was not in state, and the API call failed, so something is wrong.
          //So the user should be directed to the errorPage.
          this.$router.push("/notfound");
        });
    },
  },
  created() {
    this.getPageData();
    console.log("chc")
  },
};
</script>

<style lang="scss" scoped>
.brad {
  font-size: 1rem;
}
</style>


