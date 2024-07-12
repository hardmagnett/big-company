<script setup lang="ts">
import { reactive } from "vue";

import {
  iDialogableEmits,
  iDialogablePropDefaults,
} from "@/app/component-interfaces/IDialogable";
import type { IDialogableProps } from "@/app/component-interfaces/IDialogable";
import { required } from "@/a-library/third-party/vuelidate/i18n-validators";
import { useVuelidate } from "@vuelidate/core";
import tempPositions from "@/delme-temp-data/tempPositions";
import {helpers} from "@vuelidate/validators";

const emit = defineEmits([...iDialogableEmits]);

export interface Props extends IDialogableProps {}
withDefaults(defineProps<Props>(), {
  ...iDialogablePropDefaults,
});

let formValues = reactive({
  firstname: "Стивен",
  lastname: "Спилберг",
  positionId: 1
});

const formRules = {
  firstname: {
    required,
  },
  lastname: {
    required,
  },
  positionId: {
    required: helpers.withParams({fieldName: 'position'}, required)
  },
};
const v$ = useVuelidate(formRules, formValues);

const submitHandler = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    emit("apply");
  }
};
</script>

<template>
  <div class="employee-dialog-add-edit">
    <ADialog
      remainOnEsc
      remainOnClickOutside
      text-header="Создание/Редактирование сотрудника"
      textApply="Создать/Редактировать"
      :isOpen="isOpen"
      @needToClose="emit('needToClose')"
      @apply="submitHandler"
    >
      <AInput
        placeholder="Имя"
        class="mod--mb-1"
        label="Имя *"
        @blur="v$.firstname.$touch"
        :error-messages="v$.firstname.$errors.map((e) => e.$message)"
        v-model="formValues.firstname"
      ></AInput>
      <AInput
        placeholder="Фамилия"
        label="Фамилия *"
        @blur="v$.lastname.$touch"
        :error-messages="v$.lastname.$errors.map((e) => e.$message)"
        v-model="formValues.lastname"
      ></AInput>
      <AMultiSelect
          class="am-col-12 am-col-sm-6"
          label="Должность"
          v-model="formValues.positionId"
          :options="tempPositions"
          @blur="v$.positionId.$touch"
          :error-messages="v$.positionId.$errors.map((e) => e.$message)"
      />
    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-add-edit {
}
</style>
