<template>
    <div>
        <img :src="topSvg" alt="En kant af skyer">
    </div>
</template>

<script>
import topSvg from "@/assets/svg/edge/whiteEdge_one.svg"
export default {
    name: "SvgEdgeTop",
    data() {
        return {
            topSvg,
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
    }
</style>