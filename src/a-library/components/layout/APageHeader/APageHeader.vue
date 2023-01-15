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
  padding-left: var(--gap);
  padding-right: var(--gap);
  height: var(--headerHeight);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  background-color: var(--clrBgBlueBig);
  border-bottom: 1px solid var(--clrBorderBlueLightest)
}
</style>
