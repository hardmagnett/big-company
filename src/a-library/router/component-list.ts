// Переменная, чтобы сделать маршруты с дочерними урлами, не имея родительского маршрута.
let pathToComponents = '/components/'

export default [
    {
      path: `${pathToComponents}headers`,
      name: 'headers',
      component: () => import('@/a-library/views/component-list/Headers/Headers.vue')
    },
    {
      path: `${pathToComponents}buttons`,
      name: 'buttons',
      component: () => import('@/a-library/views/component-list/Buttons/Buttons.vue')
    },
    {
      path: `${pathToComponents}inputs`,
      name: 'inputs',
      component: () => import('@/a-library/views/component-list/Inputs/Inputs.vue')
    }
]
