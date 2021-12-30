<template>
    <div>
        <h1>Side 404</h1>
        <p>Noget gik galt, prøv igen.</p>
        <router-link to="/">FORSIDE</router-link>
        <!-- 
            Ideer til SVG:
            Fluff i en faldskærm,
            Fluff der er væltet,
         -->
    </div>
</template>

<script>
export default {
    name:"ErrorPage",
    mounted() {
        window.scrollTo(0,0);
    }
}
</script>

<style lang="scss" scoped>

</style>