// Переменная, чтобы сделать маршруты с дочерними урлами, не имея родительского маршрута.
let pathToComponents = '/components/'

export default [
    {
      path: `${pathToComponents}headers`,
      name: 'headers',
      component: () => import('@/views/components/Headers.vue')
    },
    {
      path: `${pathToComponents}buttons`,
      name: 'buttons',
      component: () => import('@/views/components/Buttons.vue')
    },
    {
      path: `${pathToComponents}inputs`,
      name: 'inputs',
      component: () => import('@/views/components/Inputs.vue')
    }
]
