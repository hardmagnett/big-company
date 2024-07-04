<script setup lang="ts">
import {reactive} from "vue";

import {
  iDialogableEmits,
  iDialogablePropDefaults,
} from "@/app/component-interfaces/IDialogable";
import type { IDialogableProps } from "@/app/component-interfaces/IDialogable";
import {required} from "@/a-library/third-party/vuelidate/i18n-validators";
import {useVuelidate} from "@vuelidate/core";

const emit = defineEmits([...iDialogableEmits]);

export interface Props extends IDialogableProps {}
withDefaults(defineProps<Props>(), {
  ...iDialogablePropDefaults,
});

let formValues = reactive({
  firstname: 'Стивен',
  lastname: 'Спилберг',
});

const formRules = {
  firstname: {
    required,
  },
  lastname: {
    required,
  },
};
const v$ = useVuelidate(formRules, formValues);

const submitHandler = async () => {

  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    emit('apply')
  }

}
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
        <AInput placeholder="Имя" class="mod--mb-1"
                label="Имя *"
          @blur="v$.firstname.$touch"
                :error-messages="v$.firstname.$errors.map((e) => e.$message)"
          v-model="formValues.firstname"
        ></AInput>
        <AInput placeholder="Фамилия"
                label="Фамилия *"
                @blur="v$.lastname.$touch"
                :error-messages="v$.lastname.$errors.map((e) => e.$message)"
                v-model="formValues.lastname"
        ></AInput>

    </ADialog>
  </div>
</template>

<style scoped>
.employee-dialog-add-edit {
}
</style>
