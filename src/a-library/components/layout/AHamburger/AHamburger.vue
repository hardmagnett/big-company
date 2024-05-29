<template>
  <div
      class="a-hamburger"
      :class="{'a-hamburger--is-cross': isCrossTemp}"
      @click="processClick"
  >
    <div class="a-hamburger__lines">
      <div class="a-hamburger__line a-hamburger__line--1" />
      <div class="a-hamburger__line a-hamburger__line--2" />
      <div class="a-hamburger__line a-hamburger__line--3" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isCross: {
      type: Boolean,
      default: true,
    }
  },
  data(){
    return {
      isCrossTemp: false
    }
  },
  methods: {
    processClick(){
      this.isCrossTemp = !this.isCrossTemp
      this.$emit('clickedOnCross')
    }
  }
}
</script>

<style scoped>
.a-hamburger {
  cursor: pointer;
  height: var(--header-height);
  width: var(--header-height);
  overflow: hidden;
  background-color: var(--clr-fill-blue-small);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  .a-hamburger__lines {
    display: flex;
    flex-flow: column nowrap;
    gap: 7px;
    width: 20px;
    transition: transform var(--time-short);
    .a-hamburger__line {
      transition: opacity var(--time-short), transform var(--time-short);
      height: 2px;
      background-color: white;
    }
  }

  &.a-hamburger--is-cross {
    .a-hamburger__lines {
      transform: rotate(360deg);
      .a-hamburger__line {
        height: 2px;
        background-color: white;
        &.a-hamburger__line--1 {
          transform: rotate(45deg) translate(6px, 6.5px);
        }
        &.a-hamburger__line--2 {
          opacity: 0;
        }
        &.a-hamburger__line--3 {
          transform: rotate(-45deg) translate(6px, -6.5px);
        }
      }
    }
  }
}
</style>
