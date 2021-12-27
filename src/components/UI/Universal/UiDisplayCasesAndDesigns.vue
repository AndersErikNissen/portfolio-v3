<template>
<router-link v-if="dataObj" :to="basePath + dataObj.slug">
    <article>
        <section>
            <h3>
               {{ useACF.title }}
            </h3>
            <p>
                {{ useACF.description }}
            </p>
            <ui-svg :path="useACF.svg_path" :title="useACF.title"></ui-svg>
        </section>
    </article>
</router-link>
</template>

<script>
import uiSvg from '../SVG/UiSvgContainer.vue'
export default {
    name: "UiDisplayContainer",
    props: {
        dataObj: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            required: true
        }
    },
    components: {
        uiSvg,
    },
    data() {
        return {

        }
    },
    computed: {
        useACF() {
            return this.dataObj.acf;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
    color: inherit;
    text-decoration: inherit;
}

</style>