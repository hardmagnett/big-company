<script setup lang="ts">
</script>
<template>
  <div class="view-dialog">
    <Teleport to="#page-header-place">
      <APageHeader> Диалоговое окно </APageHeader>
    </Teleport>

    <ABtn>Открыть диалоговое окно</ABtn>
    <ADialog>
      <p>Передано в слот для a-dialog</p>
    </ADialog>
  </div>
</template>

<style scoped>
.view-dialog {

}
</style>

