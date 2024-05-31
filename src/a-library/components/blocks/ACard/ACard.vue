<template>
  <div class="a-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.a-card {
  padding: var(--gap);
  border: 1px solid var(--clr-border-blue-lightest);
  border-radius: var(--border-radius);
  background-color: white;
}
</style>
