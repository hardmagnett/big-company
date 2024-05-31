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
    },
    {
      path: `${pathToComponents}column-grid`,
      name: 'column-grid',
      component: () => import('@/a-library/views/component-list/ColumnGrid/ColumnGrid.vue')
    },
    {
      path: `${pathToComponents}blocks`,
      name: 'blocks',
      component: () => import('@/a-library/views/component-list/Blocks/Blocks.vue')
    }
]
