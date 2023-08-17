export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis',
            i18nTitle: 'routes.dashboard.analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench',
            i18nTitle: 'routes.dashboard.workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        i18nTitle: 'routes.dashboard._value'
      }
    },
    {
      name: 'report',
      path: '/report',
      component: 'basic',
      children: [
        {
          name: 'report_user',
          path: '/report/user',
          component: 'self',
          meta: {
            title: 'FBA已接收库存',
            i18nTitle: 'routes.report.user',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'report_capacity',
          path: '/report/capacity',
          component: 'self',
          meta: {
            title: 'FBA库龄',
            i18nTitle: 'routes.report.capacity',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'report_inventory',
          path: '/report/inventory',
          component: 'self',
          meta: {
            title: 'FBA盘库',
            i18nTitle: 'routes.report.inventory',
            requiresAuth: true,
            icon: 'simple-icons:apacheecharts'
          }
        },
        {
          name: 'report_supplement',
          path: '/report/supplement',
          component: 'self',
          meta: {
            title: 'FBA补货',
            i18nTitle: 'routes.report.supplement',
            requiresAuth: true,
            icon: 'simple-icons:swiper'
          }
        },
        {
          name: 'report_types',
          path: '/report/types',
          component: 'self',
          meta: {
            title: 'FBA库存分类账',
            i18nTitle: 'routes.report.types',
            requiresAuth: true,
            icon: 'simple-icons:swiper'
          }
        },
        {
          name: 'report_range',
          path: '/report/range',
          component: 'self',
          meta: {
            title: '日期范围报告',
            i18nTitle: 'routes.report.range',
            requiresAuth: true,
            icon: 'mdi:printer'
          }
        },
        {
          name: 'report_delivery',
          path: '/report/delivery',
          component: 'self',
          meta: {
            title: '配送信息',
            i18nTitle: 'routes.report.delivery',
            requiresAuth: true,
            icon: 'clarity:plugin-line'
          }
        },
        {
          name: 'report_business',
          path: '/report/business',
          component: 'self',
          meta: {
            title: '业务报告',
            i18nTitle: 'routes.report.business',
            requiresAuth: true,
            icon: 'mdi:card-outline'
          }
        }
      ],
      meta: {
        title: '报表',
        i18nTitle: 'routes.report._value',
        icon: 'carbon:cloud-service-management',
        order: 9
      }
    }
  ],
  admin: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis',
            i18nTitle: 'routes.dashboard.analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench',
            i18nTitle: 'routes.dashboard.workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        i18nTitle: 'routes.dashboard._value'
      }
    },
    {
      name: 'report',
      path: '/report',
      component: 'basic',
      children: [
        {
          name: 'report_user',
          path: '/report/user',
          component: 'self',
          meta: {
            title: '用户管理',
            i18nTitle: 'routes.report.user',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        }
      ],
      meta: {
        title: '报表',
        i18nTitle: 'routes.report._value',
        icon: 'carbon:cloud-service-management',
        order: 9
      }
    }
  ],
  user: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis',
            i18nTitle: 'routes.dashboard.analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench',
            i18nTitle: 'routes.dashboard.workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        i18nTitle: 'routes.dashboard._value'
      }
    }
  ]
};
