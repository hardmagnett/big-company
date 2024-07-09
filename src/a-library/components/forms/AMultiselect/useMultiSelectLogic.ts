import type {Option, PropsWithDefaults} from '@/a-library/components/forms/AMultiselect/AMultiSelect.vue';

export function useMultiSelectLogic(props: PropsWithDefaults) {
  const isOptionNumberOrString = (option: Option): option is number | string => {
    const result = (typeof option === 'number' || typeof option === 'string')
    return result
  }

  const createTemplateKeyForOption = (option: Option, index: number)=>{
    const result = isOptionNumberOrString(option)
      ? index
      : option[props.optionObjectFieldValue]
    return result
  }
  const createTemplateValueForOption = (option: Option)=>{
    const result = isOptionNumberOrString(option)
      ? option
      : option[props.optionObjectFieldTitle]
    return result
  }
  return {
    isOptionNumberOrString,
    createTemplateKeyForOption,
    createTemplateValueForOption
  }
}
