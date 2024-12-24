<template>
    <section class="profil__textBlock--outer">
        <h2 class="clamp">
            {{ dataObj.title }}
        </h2>
        <p v-html="dataObj.text"></p>
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
    margin: var(--margin-large) 0;
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
    & h2 {
        max-width: 12ch;
    }
    @media screen and (max-width: 468px) {
        margin: calc(var(--margin-outer) * 2);
    }
}
</style>