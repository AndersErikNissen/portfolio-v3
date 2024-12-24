<template>
  <section>
    <svg-top></svg-top>

    <section class="fill flex center column">

      <div class="max-width">

        <profil-textblock
          :dataObj="getContentMain"
        ></profil-textblock>

        <!-- Erfaringer -->
        <div id="profile_exp">

          <div>
            <h2>Erfaring</h2>
            <p>{{ getContentMain.extra_text }}</p>

            <!-- Experience -->
            <h4>{{ getExperience.title }}</h4>
            <ul class="clean">
              <li v-for="expObj in getExperience.array" :key="expObj">
                <p class="left">{{ expObj.skill }}</p>
  
                <!-- Help from: https://henry-rossiter.medium.com/in-line-conditional-text-icon-rendering-with-vue-444cab91ef3d -->
                <p class="right"><strong>{{ expObj.amount }}</strong> projekt{{ expObj.amount > 1 ? 'er' : '' }}</p>
              </li>
            </ul>

            <!-- Amount -->
            <h4>{{getOther.title}}</h4>
            <ul class="clean">
              <li v-for="otherObj in getOther.array" :key="otherObj">
                <p class="left">{{otherObj.skill}}</p>
                <p class="right"><strong>{{otherObj.text}}</strong> erfaring</p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>

    <svg-bot></svg-bot>

  </section>
</template>

<script>

import svgTop from "../SVG/SvgEdgeTop.vue";
import svgBot from "../SVG/SvgEdgeBot.vue";
import profilTextblock from "./ProfilTextBlock.vue";

export default {
  name: "ProfilContent",
  components: {
    profilTextblock,
    svgTop,
    svgBot,
  },
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profilData: this.$store.state.main.profil
    }
  },
  computed: {
    getHero() { return this.profilData.hero },
    getContentMain() { return this.profilData.content.main },
    getExperience() { return this.profilData.content.extra.experience },
    getOther() { return this.profilData.content.extra.other },
  }
};
</script>

<style lang="scss" scoped>

#profile_exp {

  ul {

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        &.right {
          max-width: 50%;
        }
      }
    }
  }

}

</style>