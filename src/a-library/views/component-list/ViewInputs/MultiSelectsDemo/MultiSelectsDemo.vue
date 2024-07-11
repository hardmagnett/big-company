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
    { tId: 1, tTitle: "One" },
    { tId: 3, tTitle: "Three" },
    { tId: 6, tTitle: "Six" },
    { tId: 7, tTitle: "Seven" },
  ],
  objectsWithStringId: [
    { tId: "First", tTitle: "One" },
    { tId: "Third", tTitle: "Three" },
    { tId: "Sixth", tTitle: "Six" },
    { tId: "Seventh", tTitle: "Seven" },
  ],
};

let allVariantsData = reactive([
  {
    'label': 'number[] -> number',
    vModel: null,
    options: optionVals.numbers,
    multiple: false,
    returnObject: false,
    
  },
  {
    'label': 'string[] -> string',
    vModel: null,
    options: optionVals.strings,
    multiple: false,
    returnObject: false,
  },
  {
    'label': 'Object[] -> number',
    vModel: null,
    options: optionVals.objectsWithNumberId,
    multiple: false,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> string',
    vModel: null,
    options: optionVals.objectsWithStringId,
    multiple: false,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> Object',
    vModel: null,
    options: optionVals.objectsWithStringId,
    multiple: false,
    returnObject: true,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  
    
    
  {
    'label': 'number[] -> number[]',
    vModel: [],
    options: optionVals.numbers,
    multiple: true,
    returnObject: false,
  },
  {
    'label': 'string[] -> string[]' ,
    options: optionVals.strings,
    vModel: [],
    multiple: true,
    returnObject: false,
  },
  {
    'label': 'Object[] -> number[]'  ,
    vModel: [],
    options: optionVals.objectsWithNumberId,
    multiple: true,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> string[]'   ,
    vModel: [],
    options: optionVals.objectsWithStringId,
    multiple: true,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> Object'      ,
    vModel: [],
    options: optionVals.objectsWithNumberId,
    multiple: true,
    returnObject: true,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
    
])


</script>

<template>
  <div class="multi-selects-demo">
    <h2>Мультиселект</h2>

    <div
        class="multi-selects-demo__data-variant"
        v-for="(dataVariant, index) in allVariantsData" :key="index">
      <div  class="temp-hint">
        v-model:
        <code>{{ $debugVar(dataVariant.vModel) }}</code>
      </div>
      <p class="temp-hint">
        Options: <code>{{ dataVariant.options }}</code>
      </p>
      <AMultiSelect
          :label="dataVariant.label"
          v-model="dataVariant.vModel"
          :options="dataVariant.options"
          :return-object="dataVariant.returnObject"
          :multiple="dataVariant.multiple"
          :optionObjectFieldTitle="dataVariant.optionObjectFieldTitle"
          :optionObjectFieldValue="dataVariant.optionObjectFieldValue"
      />
    </div> 

    <hr>
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
  </div>
</template>

<style scoped>
.multi-selects-demo {
  .multi-selects-demo__data-variant {
    outline: 1px solid gray;
    height: 500px;
  }
  
  .temp-hint {
    font-size: var(--font-size-tiny);
    margin: 0;
  }
  .temp-columns {
    display: flex;
    gap: var(--gap);

    .temp-column {
      /*outline: 1px solid darkred;*/
      flex: 0 0 calc(50% - var(--gap) / 2);
    }
  }
  
}
</style>
