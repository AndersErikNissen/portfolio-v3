<template>
  <section>
    <h2>Cases</h2>
    <ul>
      <!-- <li v-for="caseObj in cases" :key="caseObj">
        {{ caseObj }}
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  name: "HjemCases",
  data() {
    return {
      showAmount: 2,
      cases: undefined,
    };
  },
  computed: {
    // whileCases() {
    //   // Check Library and get a surtain amount of objects from the array - randomly.
    // },
  },
  methods: {
   
  },
  created() {
  
  },
};
</script>

<style lang="scss" scoped>
</style>