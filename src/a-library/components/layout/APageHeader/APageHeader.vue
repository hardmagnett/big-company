<template>
  <div class="a-page-header">
    <h1 class="mod--mb-0">
      <slot> </slot>
    </h1>
  </div>
</template>

<style scoped>
.a-page-header {
  padding-left: var(--gap);
  padding-right: var(--gap);
  height: var(--header-height);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  border-bottom: 1px solid var(--clr-border-blue-lighter);
}
</style>
