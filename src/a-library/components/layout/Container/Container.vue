<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: calc(var(--gap) / 2) var(--gap);
  margin-left: var(--leftMenuWidth);
  overflow-x: hidden;
}
</style>
