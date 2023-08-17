const report: AuthRoute.Route = {
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
        title: 'FBA已接收库存',
        i18nTitle: 'routes.report.capacity',
        requiresAuth: true,
        icon: 'material-symbols:route'
      }
    },
    {
      name: 'report_inventory',
      path: '/report/inventory',
      component: 'self',
      meta: {
        title: 'FBA已接收库存',
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
        title: 'FBA补货',
        i18nTitle: 'routes.report.types',
        requiresAuth: true,
        icon: 'mdi:clipboard-outline'
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
};

export default report;
