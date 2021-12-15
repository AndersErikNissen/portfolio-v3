<template>
  <main v-if="hjemObj">
    <h1>
      {{ hjemObj.titletoh1 }}
    </h1>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "HjemPage",
  data() {
    return {
      hjemObj: false,
      WPID: this.$store.state.nav.find((item) => item.title == "Hjem"),
    };
  },
  methods: {
    checkData() {},
    loadData() {
      axios
        .get(
          "https://skole.aenders.dk/wp-json/wp/v2/posts/" +
            this.WPID.WPpost +
            "?status=publish&per_page=50"
        )
        .then((response) => {
          console.log(response);

          this.hjemObj = response.data.acf;

          this.$store.commit({
            type: 'ADD_APIDATA',
            WPinfo: this.WPID,
            content: this.hjemObj
          })
        })
        .catch((error)=> {
          console.log(error)
        });
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.brad {
  font-size: 1rem;
}
</style>


