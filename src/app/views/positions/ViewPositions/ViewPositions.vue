<script setup lant="ts">

import {ref} from "vue"
import PositionsTable from "@/app/components/positions/PositionsTable/PositionsTable.vue"

let isOpenDialogPositionDeleting = ref(false);
let isOpenDialogPositionCreatingEditing = ref(false);

const needToDeletePositionHandler = () => {
  isOpenDialogPositionDeleting.value = true;
};

const needToEditPositionHandler = () => {
  isOpenDialogPositionCreatingEditing.value = true;
};

const needToCreatePositionHandler = () => {
  isOpenDialogPositionCreatingEditing.value = true;
};
</script>

<template>
  <div class="view-positions">
    <Teleport to="#page-header-place">
      <APageHeader> Должности </APageHeader>
    </Teleport>

    <PositionsTable
        @needToDeletePosition="needToDeletePositionHandler"
        @needToEditEmployee="needToEditPositionHandler"
    />
  </div>
</template>

<style scoped>
.view-positions {
  
}
</style>
