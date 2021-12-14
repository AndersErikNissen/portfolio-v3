<template>
  <div id="hamburgerDiv" @click="animate_status">
    <!-- <?xml version="1.0" encoding="utf-8"?> -->
    <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      version="1.1"
      id="Hamburger"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 90 90"
      style="enable-background: new 0 0 90 90"
      xml:space="preserve"
    >
      <g id="center">
        <polyline class="st_v1" points="45,55 45,45 85.1,45 	" />
        <polyline class="st_v1" points="45,35 45,45 4.9,45 	" />
      </g>
      <g id="outer">
        <path class="st_v1" d="M5,45C5,22.9,22.9,5,45,5H4.9" />
        <path class="st_v1" d="M85,45C85,22.9,67.1,5,45,5h40.1" />
        <path class="st_v1" d="M5,45c0,22.1,17.9,40,40,40H4.9" />
        <path class="st_v1" d="M85.1,45c0,22.1-17.9,40-40,40h40.1" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "HamburgerIcon",
  data() {
    return {
      status_animate: false,
    };
  },
  methods: {
    animate_status() {
      const div = document.querySelector("#hamburgerDiv"); // Not Scoped, remember!

      if (!div.classList.contains("active")) {
        div.classList.add("active");
        if (div.classList.contains("inactive")) {
          div.classList.remove("inactive");
        }
      } else {
        div.classList.remove("active");
        div.classList.add("inactive");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_mixins.scss';
#hamburgerDiv {
    width: 35px;
}

// Styling Class
.st_v1 {
  fill: none;
  stroke: rgb(0, 0, 0);
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
// Animation blocks
#outer {
  path {
    transition: stroke-dasharray 350ms ease-in-out,
      stroke-dashoffset 350ms ease-in-out;
    stroke-dasharray: 40.0999 102.9444;
    stroke-dashoffset: -63px;
    .active & {
      stroke-dasharray: 62.6 102.9444;
      stroke-dashoffset: 0px;
    }
  }
}
#center {
  polyline {
    transition: stroke-dasharray 350ms ease-in-out,
      stroke-dashoffset 350ms ease-in-out;
    stroke-dasharray: 41.1 50.1;
    stroke-dashoffset: -10;
    transform-origin: center;
    .active & {
      @include keyframes(rotateX) {
        70% {
          stroke-dasharray: 20 50.1;
          stroke-dashoffset: 0;
          transform: rotate(0deg);
        }
        80% {
          stroke-dasharray: 20 50.1;
          stroke-dashoffset: 0;
          transform: rotate(75deg);
        }
        90% {
          stroke-dasharray: 20 50.1;
          stroke-dashoffset: 0;
          transform: rotate(30deg);
        }
        100% {
          stroke-dasharray: 20 50.1;
          stroke-dashoffset: 0;
          transform: rotate(45deg);
        }
      }
      @include animate(rotateX, 400ms, ease-in-out, forwards);
    }
    .inactive & {
      @include keyframes(rotateX_out) {
        0% {
          stroke-dasharray: 21.1 50.1;
          stroke-dashoffset: 0;
          transform: rotate(45deg);
        }
        10% {
          stroke-dasharray: 21.1 50.1;
          stroke-dashoffset: 0;
          transform: rotate(0deg);
        }
      }
      @include animate(rotateX_out, 400ms, ease-in-out, forwards);
    }
  }
}
</style>