<template>
  <div class="blocks">
    <Teleport to="#page-header-place">
      <APageHeader> Блоки </APageHeader>
    </Teleport>

    <h2>Карточка</h2>
    <ACard> Содержимое карточки </ACard>
    <br />
    <ACard class="a-card--calm">
      Карточка с модификатором <code class="mod--code">a-card--calm</code>
    </ACard>
  </div>
</template>

<style scoped>
.blocks {
}
</style>
<script setup lang="ts"></script>
