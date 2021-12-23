<template>
    <section class="profil__heroPack--outer">
        <section class="profil__hero--content">
            <section>
                <h1>
                    {{ dataObj.title }}
                </h1>
                <p>
                    {{ dataObj.description }}
                </p>
            </section>
            <div>
                <img :src="dataObj.img" alt="Profilbillede af AEN">
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "ProfilHero.vue",
    props: {
        dataObj: {
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>

</style>