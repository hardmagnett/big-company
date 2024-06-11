<template>
  <input v-bind="$attrs" class="txt" />
</template>

<style scoped>
.txt {
  --height: calc(var(--gap) * 2);
  display: block;
  height: var(--height);
  line-height: var(--height);
  padding-left: var(--gap);
  padding-right: var(--gap);
  border: 1px solid var(--clr-border-blue-lighter);
  border-radius: var(--border-radius);
  width: 100%;
}
</style>
