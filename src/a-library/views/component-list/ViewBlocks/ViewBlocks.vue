<template>
  <div class="blocks">
    <APageHeaderWithTeleport text="Блоки" />

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
<script setup lang="ts">
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>
