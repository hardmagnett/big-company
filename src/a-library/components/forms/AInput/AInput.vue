<template>
  <AInputControl class="a-input">
    <input
      class="a-input__input"
      v-bind="$attrs"
    />
  </AInputControl>
  <!--<input v-bind="$attrs" class="a-input" />-->
</template>

<style scoped>
.a-input {

  .a-input__input {
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

}
</style>
<script setup lang="ts">
</script>
