<template>
    <section>
        <template-block v-for="(area, index) in dataObj" :key="area" :dataObj="area" :index="index"></template-block>
    </section>
</template>

<script>
import templateBlock from "./TemplateSegmentBlock.vue"
export default {
    name: "TemplateSegmentShell",
    components: {
        templateBlock,
    },
    props: {
        dataObj: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>