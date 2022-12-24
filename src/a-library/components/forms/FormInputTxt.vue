<template>
  <input
    v-bind="$attrs"
    class="txt"
  />

</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
  .txt {
    --height: calc(var(--gap) * 2);
    display: block;
    height: var(--height);
    line-height: var(--height);
    padding-left: var(--gap);
    padding-right: var(--gap);
    border: 1px solid var(--clrBorderBlueLighter);
    border-radius: var(--borderRadius);
    width: 100%;
  }
</style>
