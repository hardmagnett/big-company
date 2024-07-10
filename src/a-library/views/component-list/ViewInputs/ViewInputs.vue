<script setup lang="ts">
import { reactive } from "vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

let multiselectVals = reactive({
  singleInNumbersOutNumber: null,
  singleInStringsOutString: null,
  singleInObjectsOutNumber: null,
  singleInObjectsOutString: null,
  singleInObjectsOutObject: null,

  multiInNumbersOutNumberArray: [],
  multiInStringsOutStringArray: [],
  multiInObjectsOutNumberArray: [],
  multiInObjectsOutStringArray: [],
  multiInObjectsOutObjectArray: [],
});

let optionVals = {
  numbers: [1, 3, 6, 7],
  strings: ["one", "three", "six", "seven"],
  objectsWithNumberId: [
    { tId: 1, tTitle: "one" },
    { tId: 3, tTitle: "three" },
    { tId: 6, tTitle: "six" },
    { tId: 7, tTitle: "seven" },
  ],
  objectsWithStringId: [
    { tId: "first", tTitle: "one" },
    { tId: "third", tTitle: "three" },
    { tId: "sixth", tTitle: "six" },
    { tId: "seventh", tTitle: "seven" },
  ],
};
</script>

<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Мультиселект</h2>
    <div class="temp-columns">
      <div class="temp-column">
        <p class="temp-hint">
          Value:
          <code>{{ $debugVar(multiselectVals.singleInNumbersOutNumber) }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.numbers }}</code>
        </p>
        <AMultiSelect
          label="number[] -> number"
          v-model="multiselectVals.singleInNumbersOutNumber"
          :options="optionVals.numbers"
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{ $debugVar(multiselectVals.singleInStringsOutString) }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.strings }}</code>
        </p>
        <AMultiSelect
          label="string[] -> string"
          v-model="multiselectVals.singleInStringsOutString"
          :options="optionVals.strings"
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{ $debugVar(multiselectVals.singleInObjectsOutNumber) }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> number"
          v-model="multiselectVals.singleInObjectsOutNumber"
          :options="optionVals.objectsWithNumberId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{ $debugVar(multiselectVals.singleInObjectsOutString) }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> string"
          v-model="multiselectVals.singleInObjectsOutString"
          :options="optionVals.objectsWithStringId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{ $debugVar(multiselectVals.singleInObjectsOutObject) }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> Object"
          v-model="multiselectVals.singleInObjectsOutObject"
          :options="optionVals.objectsWithNumberId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
          return-object
        />
      </div>

      <div class="temp-column">

        <p class="temp-hint">
          Value:
          <code>{{
            $debugVar(multiselectVals.multiInNumbersOutNumberArray)
          }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.numbers }}</code>
        </p>
        <AMultiSelect
          label="number[] -> number[]"
          v-model="multiselectVals.multiInNumbersOutNumberArray"
          :options="optionVals.numbers"
          multiple
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{
            $debugVar(multiselectVals.multiInStringsOutStringArray)
          }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.strings }}</code>
        </p>
        <AMultiSelect
          label="string[] -> string[]"
          v-model="multiselectVals.multiInStringsOutStringArray"
          :options="optionVals.strings"
          multiple
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{
            $debugVar(multiselectVals.multiInObjectsOutNumberArray)
          }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> number[]"
          v-model="multiselectVals.multiInObjectsOutNumberArray"
          :options="optionVals.objectsWithNumberId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
          multiple
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{
            $debugVar(multiselectVals.multiInObjectsOutStringArray)
          }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> string[]"
          v-model="multiselectVals.multiInObjectsOutStringArray"
          :options="optionVals.objectsWithStringId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
          multiple
        />

        <br />
        <p class="temp-hint">
          Value:
          <code>{{
            $debugVar(multiselectVals.multiInObjectsOutObjectArray)
          }}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{ optionVals.objectsWithNumberId }}</code>
        </p>
        <AMultiSelect
          label="Object[] -> Object"
          v-model="multiselectVals.multiInObjectsOutObjectArray"
          :options="optionVals.objectsWithNumberId"
          optionObjectFieldTitle="tTitle"
          optionObjectFieldValue="tId"
          multiple
          return-object
        />
      </div>
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <br />
    <h2>Текстовое поле</h2>
    <p>По умолчанию.</p>
    <AInput label="Лейбл" hideHint></AInput>
    <br />
    <p>Без лейбла. С плейлхолдером.</p>
    <AInput
      value="default value"
      hideLabel
      placeholder="placeholder for text"
      hideHint
    ></AInput>
    <br />

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" hide-hint />
    <ACheckBox
      label="Чекбокс со скрытым местом для заголовка"
      hide-hint
      hide-label
    />
    <ACheckBox hide-hint hide-label />
    <br />
  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;

  .temp-hint {
    font-size: var(--font-size-tiny);
    margin: 0;
  }
  .temp-columns {
    display: flex;
    gap: var(--gap);

    .temp-column {
      outline: 1px solid darkred;
      flex: 0 0 calc(50% - var(--gap) / 2);
    }
  }
}
</style>
