<template>
    <!--
        2 use cases:
        # If used in hjem Hero, hero = true and it will have the link to the pdf.
        # If NOT used in Hero but used in hjem Desc, hero = false, and it will have a link to /profil. 
     -->
    <section class="hjem__hero--pack">
        <section class="hjem__contentPack">
            <!-- Will always have "hjem__textPack", but depending on hero's value the next class will change to match -->
            <div :class="['hjem__textPack', hero ? 'hjem__layout--hero' : 'hjem__layout--desc']">
                <section>
                    <h1 v-if="hero">
                        {{ dataObj.title }}
                    </h1>
                    <h2 v-else>
                        {{ dataObj.title }}
                    </h2>
                    <p>
                        {{ dataObj.description }}
                    </p>
                    <a v-if="hero" href="@/assets/pdf/aen_cv.pdf" download> SE CV</a>
                    <router-link v-else to="/profil">LÆS MERE</router-link>
                </section>
            </div>
            <div>
                <img v-if="hero" :src="svgCity" alt="En by med et blødt moster, som ser sød og imødekommende ud. (SVG fil med animation)">
                <img v-else :src="svgDesk" alt="En by med et blødt moster, som ser sød og imødekommende ud. (SVG fil med animation)">
            </div>
        </section>


    </section>
</template>

<script>
import heroSvg from "@/assets/svg/CodeCity.svg"
import deskSvg from "@/assets/svg/FlyingDesk.svg"
export default {
    name: "HjemHero",
    props: {
        dataObj: {
            type: Object,
            required: true
        },
        hero: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            svgCity: heroSvg,
            svgDesk: deskSvg
        }
    }

}
</script>

<style lang="scss" scoped>

</style>