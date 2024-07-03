<script setup lang="ts">
import RootParent from "@/a-library/views/component-list/ViewExperiments/RootParent.vue";
</script>

<template>
  <div>
    <Teleport to="#page-header-place">
      <APageHeader> Эксперименты </APageHeader>
    </Teleport>
    <RootParent />
    <p>Здесь проводятся эксперименты.</p>
  </div>
</template>
