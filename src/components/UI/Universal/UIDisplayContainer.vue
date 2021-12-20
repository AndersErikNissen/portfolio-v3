<template>
<router-link v-if="obj" :to="basePath + obj.slug">
    <article>
        <section>
            <h3>
               {{ useACF.title }}
            </h3>
            <p>
                {{ useACF.description }}
            </p>
        </section>
    </article>
</router-link>
</template>

<script>
export default {
    name: "UiDisplayContainer",
    props: {
        obj: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {
        useACF() {
            return this.obj.acf;
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