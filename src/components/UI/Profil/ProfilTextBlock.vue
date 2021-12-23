<template>
    <section class="profil__textBlock--outer">
        <h2>
            {{ dataObj.title }}
        </h2>
        <p>
            {{ dataObj.title }}
        </p>
    </section>    
</template>

<script>
export default {
    name: "ProfilTextBlock",
    props: {
        dataObj: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>