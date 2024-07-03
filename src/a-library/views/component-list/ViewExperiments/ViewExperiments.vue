<script setup lang="ts">
import { } from 'vue'
import ChildOne from "@/a-library/views/component-list/ViewExperiments/ChildOne.vue";

</script>

<template>
  <div class="view-experiments">
    <Teleport to="#page-header-place">
      <APageHeader> Эксперименты </APageHeader>
    </Teleport>

    <ChildOne />

  </div>
</template>

<style scoped>
.view-experiments {}
</style>
