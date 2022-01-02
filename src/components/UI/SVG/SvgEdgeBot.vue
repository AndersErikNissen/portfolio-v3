<template>
    <div>
        <img :src="botSvg" alt="En kant af skyer">
    </div>
</template>

<script>
import botSvg from "@/assets/svg/edge/whiteEdge_oneBot.svg"
export default {
    name: "SvgEdgeTop",
    data() {
        return {
            botSvg,
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
        background-color: var(--color-bg-first-5)
    }
</style>