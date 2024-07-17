<script setup lang="ts">
import RootParent from "@/a-library/views/component-list/ViewExperiments/RootParent.vue";
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>

<template>
  <div>
    <APageHeaderWithTeleport text="Эксперименты" />
    <RootParent />
    <p>Здесь проводятся эксперименты.</p>
  </div>
</template>
