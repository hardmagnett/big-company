<template>
  <div class="header-and-something-else">
    <div class="header-and-something-else--left">
      <slot name="left"></slot>
    </div>
    <div class="header-and-something-else--right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

// fixme:: похоже он нигде не используется. Делался лишь для того чтобы проверить компоненты.
// Удалить, когда компонентов будет много.
export default {

}
</script>

<style scoped>
.header-and-something-else {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
