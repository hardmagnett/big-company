<script setup lang="ts">

import {reactive} from "vue";
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
})

let optionVals = {
  // numbers: [1,3,6,7,13],
  numbers: [1,3,6,7],
  // strings: ['one', 'three', 'six', 'seven', 'thirteen'],
  strings: ['one', 'three', 'six', 'seven'],
  objects: [
    {tId: 1, tTitle: 'one'},
    {tId: 3, tTitle: 'three'},
    {tId: 6, tTitle: 'six'},
    {tId: 7, tTitle: 'seven'},
    // {theId: 13, theTitle: 'thirteen'},
  ]
}
</script>

<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Мультиселект</h2>
    <div class="temp-columns">
      <div class="temp-column">
        <h3>number[] -> number</h3>

        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.singleInNumbersOutNumber)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.numbers}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.singleInNumbersOutNumber"
            :options="optionVals.numbers"
        />

        <br>
        <h3>string[] -> string</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.singleInStringsOutString)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.strings}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.singleInStringsOutString"
            :options="optionVals.strings"
        />

        <br>
        <h3>Object[] -> number</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.singleInObjectsOutNumber)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.singleInObjectsOutNumber"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />

        <br>
        <h3>Object[] -> string</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.singleInObjectsOutString)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.singleInObjectsOutString"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />

        <br>
        <h3>Object[] -> Object</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.singleInObjectsOutObject)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.singleInObjectsOutObject"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />
      </div>

      <div class="temp-column">
        <h3>number[] -> number[]</h3>

        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.multiInNumbersOutNumberArray)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.numbers}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.multiInNumbersOutNumberArray"
            :options="optionVals.numbers"
        />

        <br>
        <h3>string[] -> string</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.multiInStringsOutStringArray)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.strings}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.multiInStringsOutStringArray"
            :options="optionVals.strings"
        />

        <br>
        <h3>Object[] -> number[]</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.multiInObjectsOutNumberArray)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.multiInObjectsOutNumberArray"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />

        <br>
        <h3>Object[] -> string</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.multiInObjectsOutStringArray)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.multiInObjectsOutStringArray"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />

        <br>
        <h3>Object[] -> Object</h3>
        <p class="temp-hint">
          Value: <code>{{$debugVar(multiselectVals.multiInObjectsOutObjectArray)}}</code>
        </p>
        <p class="temp-hint">
          Options: <code>{{optionVals.objects}}</code>
        </p>
        <AMultiSelect
            v-model="multiselectVals.multiInObjectsOutObjectArray"
            :options="optionVals.objects"
            optionObjectFieldTitle="tTitle"
            optionObjectFieldValue="tId"
        />
      </div>
    </div>
    <!--eawrwq-->


    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <hr><hr><hr><hr><hr>
    <br>
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
      /*flex: 0 0 50%;*/
      flex: 0 0 calc(50% - var(--gap) / 2);
    }
  }
}
</style>
