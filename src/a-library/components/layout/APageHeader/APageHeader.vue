<template>
  <div class="a-page-header">
    <h1 class="mod--mb-0">
      <slot>

      </slot>
    </h1>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
.a-page-header {
  //outline: 1px solid darkred;
  height: var(--headerHeight);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  background-color: var(--clrBgBlueSmall);
  border-bottom: 1px solid var(--clrBorderBlueLightest)
}
</style>
