type Param = string | boolean

// todo:: разобраться с этим WTF
type RuleWTF = Record<string, Param>

type FormFields = { fieldName: string, rules: RuleWTF }[]

// Логичнее назвать FieldError
type FormError = {
  fieldName: string,
  ruleName: string,
  ruleParam: Param,
  formName: string
}

type Rule = {
  /**
   *
   * @param value
   * @param param
   * @returns boolean - true, если проверка пройдена. false если проверка не пройдена
   */
  check: (value: string | number | boolean,  param: Param) => boolean,
  defaultErrorMessage: string
}

type ValidationRuleOLD = (
  fieldValue: string | number | boolean,
  // parameter: string | number | boolean
  ruleParameter: Param
) => boolean

export type {
  Param,
  ValidationRuleOLD,
  RuleWTF,
  FormFields,
  FormError,
  Rule
}
