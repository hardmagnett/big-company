/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "no-console": "warn",
    // Линтер путает вот такие TS-конструкции (через pipe)
    // <EmployeeDialogAddEdit :employee="employeeToEdit as Employee | null"></EmployeeDialogAddEdit>
    // с фильтрами, которые были во vue2 а во vue3 стали deprecated.
    "vue/no-deprecated-filter": "off"
  }
}
