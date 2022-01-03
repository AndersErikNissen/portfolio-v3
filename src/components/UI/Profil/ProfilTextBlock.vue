<template>
    <section class="profil__textBlock--outer">
        <h2>
            {{ dataObj[0] }}
        </h2>
        <p>
            {{ dataObj[1] }}
        </p>
    </section>    
</template>

<script>
export default {
    name: "ProfilTextBlock",
    props: {
        dataObj: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.profil__textBlock--outer {
    margin: var(--margin-outer);
}
</style>