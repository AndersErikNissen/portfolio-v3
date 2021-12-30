<template>
    <section :class="['flex center column', email ? 'kontakt--style' : '']">
        <h1>
            {{ dataObj.title }}
        </h1>
        <p>
            {{ dataObj.description }}
        </p>
        <div v-if="email">
            <a id="aen_email" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#97;&#110;&#100;&#101;&#114;&#115;&#101;&#114;&#105;&#107;&#110;&#105;&#115;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
        </div>
    </section>
</template>

<script>
export default {
    name: "UiIntroHeader",
    props: {
        dataObj: {
            type: Object,
            required: true
        },
        email: {
            type: Boolean
        },
        sticky: {
            type: Boolean
        }
    },
}
</script>

<style lang="scss" scoped>
.kontakt--style {
    padding: var(--padding-normal);
}
</style>