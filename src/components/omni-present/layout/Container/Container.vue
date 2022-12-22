<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-right: var(--gap);
  padding-left: var(--gap);
  margin-left: var(--leftMenuWidth);
}
</style>
