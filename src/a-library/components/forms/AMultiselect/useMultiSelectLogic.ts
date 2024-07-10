import type {Option, Options, OptionObject, PropsWithDefaults} from '@/a-library/components/forms/AMultiselect/AMultiSelect.vue';

export function useMultiSelectLogic(props: PropsWithDefaults) {
  
  const areOptionsArray = (options: Options): options is Array<Option> => {
    return Array.isArray(options)
  }
  
  // const isOptionNumberOrString = (option: Option): option is number | string => {
  //   const result = (typeof option === 'number' || typeof option === 'string')
  //   return result
  // }
  
  const isOptionOptionObject = (option: Option): option is OptionObject =>{
    const result =  typeof option === 'object' && !Array.isArray(option) && option !== null
    return result
    
  }

  const createTemplateKeyForOption = (option: Option, index: number)=>{
    // const result = isOptionNumberOrString(option)
    //   ? index
    //   : option[props.optionObjectFieldValue]
    
    const result = isOptionOptionObject(option)
      ? option[props.optionObjectFieldValue]
      : index
    return result
  }
  const createTemplateValueForOption = (option: Option)=>{
    const result = isOptionOptionObject(option)
      ? option[props.optionObjectFieldTitle]
      : option
      
    return result
  }
  return {
    areOptionsArray,
    isOptionOptionObject,
    // isOptionNumberOrString,
    createTemplateKeyForOption,
    createTemplateValueForOption
  }
}
