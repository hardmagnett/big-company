<template>
  <div class="a-page-header">
    <h1>
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
  outline: 1px solid darkred;
  height: var(--headerHeight);
}
</style>
