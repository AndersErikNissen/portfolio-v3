<template>
  <!-- <main v-if="hjemObj"> -->
  <main>
    <h1>
      <!-- {{ hjemObj.titletoh1 }} -->
      Check forside! 
    </h1>
    <h3>
      ACF.title = {{ hjemObj.acf.title}}
    </h3>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  name: "HjemPage",
  data() {
    return {
      hjemObj: false,
      WPID: this.$store.state.nav.find((item) => item.title == "Hjem"),
    };
  },
  methods: {
    checkData() {
      const checkAPIDATA = this.$store.commit("CHECK_APIDATA", {slug:"fisk"});

      // If CHECK_APIDATA is undefined, it means there was NOT a match in state.api_data so a API call is need to get the data.
      if(checkAPIDATA) {
        console.log("%c Check = True ", "background-color: blue;");
        this.hjemObj = checkAPIDATA;
      } else {
        this.$store.dispatch("GET_API_DATA", {id: 2752}).then((res)=> {
          console.log("NO RES",res)
          this.hjemObj = res;

          //If API call fails, redirect to 404 page..
        })
      }
    },
  },
  created() {
    this.checkData();
  },
};
</script>

<style lang="scss" scoped>
.brad {
  font-size: 1rem;
}
</style>


