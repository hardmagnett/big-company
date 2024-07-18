<script setup lang="ts">
import { } from 'vue'

</script>

<template>
  <div class="a-loader">
    <div class="a-loader__spiral"></div>
  </div>
</template>

<style scoped>
/*Скопировал отсюда https://css-loaders.com/hypnotic/ */
/*И переделал по своему*/
.a-loader {
  --b: 3px;
  width: calc(12*var(--b));
  aspect-ratio: 1;
  overflow: hidden;
  
  /*--clr-main: orange;*/
  /*--clr-main: var(--clr-bg-blue-highlight);*/
  --clr-main: var(--clr-bg-blue-accent);
  
  /*--clr-main: var(--clr-fill-blue-small);*/
  /*--clr-main: var(--clr-bg-blue-small);*/
  .a-loader__spiral {
    /*--b: 3px;*/
    width: calc(12*var(--b));
    aspect-ratio: 1;
    border-radius: 50%;
    /*background:*/
    /*    repeating-radial-gradient(calc(2*var(--b)) at top,#0000 -1px,#000 0 calc(50% - 1px),#0000 50% calc(100% - 1px)) calc(50% + var(--b)) 100%,*/
    /*    repeating-radial-gradient(calc(2*var(--b)) at bottom,#000 -1px,#0000 0 calc(50% - 1px),#000 50% calc(100% - 1px)) 50% 0;*/

    background:
        repeating-radial-gradient(calc(2*var(--b)) at top,#0000 -1px,var(--clr-main) 0 calc(50% - 1px),#0000 50% calc(100% - 1px)) calc(50% + var(--b)) 100%,
        repeating-radial-gradient(calc(2*var(--b)) at bottom,var(--clr-main) -1px,#0000 0 calc(50% - 1px),var(--clr-main) 50% calc(100% - 1px)) 50% 0;
    
    background-size: 150% 50%;
    background-repeat: no-repeat;
    /*mask:*/
    /*    radial-gradient(calc(1.5*var(--b)) at calc(100% - var(--b)/2) 0, #0000 calc(100%/3), #000 calc(100%/3 + 1px) 110%, #0000 0) calc(50% + var(--b)/2)*/
    /*    100%/calc(3*var(--b)) 50% exclude no-repeat,*/
    /*    conic-gradient(#000 0 0);*/
    mask:
        radial-gradient(calc(1.5*var(--b)) at calc(100% - var(--b)/2) 0, #0000 calc(100%/3), var(--clr-main) calc(100%/3 + 1px) 110%, #0000 0) calc(50% + var(--b)/2)
        100%/calc(3*var(--b)) 50% exclude no-repeat,
        conic-gradient(#000 0 0);
    animation: l20 1s infinite linear;
  }
  }
  
@keyframes l20 {
  100% {transform: rotate(1turn)}
}
</style>
