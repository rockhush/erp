import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  dashboard_analysis: () => import('./dashboard/analysis/index.vue'),
  dashboard_workbench: () => import('./dashboard/workbench/index.vue'),
  report_business: () => import('./report/business/index.vue'),
  report_capacity: () => import('./report/capacity/index.vue'),
  report_delivery: () => import('./report/delivery/index.vue'),
  report_inventory: () => import('./report/inventory/index.vue'),
  report_range: () => import('./report/range/index.vue'),
  report_supplement: () => import('./report/supplement/index.vue'),
  report_types: () => import('./report/types/index.vue'),
  report_user: () => import('./report/user/index.vue')
};
