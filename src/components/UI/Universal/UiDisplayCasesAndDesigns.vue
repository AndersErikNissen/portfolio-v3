<template>
<router-link v-if="dataObj" :to="basePath + dataObj.slug">
    <article class="pack">
        <section>
            <h3>
               {{ useACF.title }}
            </h3>
            <ui-svg class="logo" :path="useACF.svg_path" :title="useACF.title"></ui-svg>
        </section>
    </article>
</router-link>
</template>

<script>
import uiSvg from '../SVG/SvgLogoContainer.vue'
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
article {
    background-color: red;
}
.logo {
    position: relative;
    top: 0;
    left: 0;
}
</style>