<template>
<router-link :to="obj.slug">
    <article>
        <section>
            <h2>
               Title 
            </h2>
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
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
}

</style>