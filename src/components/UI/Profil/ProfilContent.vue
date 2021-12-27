<template>
<section>
    <profil-textblock v-for="textBlock in dataArr" :key="textBlock.title" :dataObj="textBlock"></profil-textblock>
</section>
</template>

<script>
import profilTextblock from "./ProfilTextBlock.vue"
export default {
    name: "ProfilContent",
    components: {
        profilTextblock,
    },
    props: {
        dataArr: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>