// логичнее назвать RuleParameterValue
type RuleValue = string | boolean

type Rule = Record<string, RuleValue>

type FormFields = { fieldName: string, rules: Rule }[]

// Логичнее назвать FieldError
type FormError = {
  fieldName: string,
  ruleName: string,
  ruleParam: RuleValue,
  formName: string
}


type ValidationRule = (
  fieldValue: string | number | boolean,
  // parameter: string | number | boolean
  ruleParameter: RuleValue
) => boolean

export type {
  RuleValue,
  ValidationRule,
  Rule,
  FormFields,
  FormError
}
