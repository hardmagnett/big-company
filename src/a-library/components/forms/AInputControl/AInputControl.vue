<script setup lang="ts">
import { } from 'vue'

</script>

<template>
  <div class="a-input-control">
    <div class="a-input-control__label">
      label
    </div>
    <div class="a-input-control__input">
      <slot></slot>
    </div>
    <div class="a-input-control__hint">
      hint
    </div>
  </div>
</template>

<style scoped>
.a-input-control {
  .a-input-control__label {
    /*outline: 1px solid darkred;*/
  }
  .a-input-control__input {
    /*outline: 1px solid green;*/

  }
  .a-input-control__hint {
    /*outline: 1px solid blue;*/
  }
}
</style>
