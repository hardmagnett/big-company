import type {
  ValidationRule,
  RuleValue
} from '@/a-library/vue-plugins/aValidator/types';


const rules: Record<string, ValidationRule>  = {
  required(fieldValue, ruleParameter) {
    // if (!ruleParameter) {
    //
    // }
    let result = Boolean(fieldValue)
    return result
  },

  minlength(fieldValue, ruleParameter) {
    return false
  }
}

export default rules
