<template>
  <div class="header-and-something-else">
    <div class="header-and-something-else--left">
      <slot name="left"></slot>
    </div>
    <div class="header-and-something-else--right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
.header-and-something-else {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
