<script setup lang="ts">
import { } from 'vue'
import RootParent from "@/a-library/views/component-list/ViewExperiments/RootParent.vue";

</script>

<template>
  <div class="view-about">
    <Teleport to="#page-header-place">
      <APageHeader> О проекте </APageHeader>
    </Teleport>
    <RootParent />
    <h2>Мокапирование бэкенда</h2>
    <p>Бэкенда для данного проекта не существует.</p>
    <p>Все GET/PUT/POST/DELETE и прочие запросы эмулируются в браузере</p>
    <p>После перезагрузки страницы всё внесенные изменения будут сброшены.</p>
  </div>
</template>

<style scoped>
.view-about {}
</style>
