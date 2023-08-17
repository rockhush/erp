<template>
  <div class="overflow-auto">
    <n-card title="业务报告" :bordered="false" class="rounded-8px shadow-sm">
      <div class="searchPannel">
        <radio-group></radio-group>
      </div>
      <div class="flex-col h-full" style="height: 420px">
        <form-line></form-line>
      </div>
      <div style="width: 100%; height: 20px; background: #eee"></div>
      <div class="flex-col h-full" style="height: 625px; padding-top: 20px">
        <n-space class="pb-12px" justify="space-between">
          <n-space></n-space>
          <n-space align="center" :size="18">
            <n-button size="small" type="primary" @click="getTableData">
              <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
              刷新
            </n-button>
            <column-setting v-model:columns="columns" />
          </n-space>
        </n-space>
        <n-data-table
          :columns="columns"
          :data="tableData"
          :loading="loading"
          :pagination="pagination"
          flex-height
          :scroll-x="2000"
          class="flex-1-hidden"
        />
      </div>
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NSpace } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchUserList } from '@/service';
import { useLoading } from '@/hooks';
import ColumnSetting from '@/components/table/column-setting.vue';
import formLine from '@/components/table/foldLineChart.vue';
import radioGroup from '@/components/table/radio-group.vue';

const { loading, startLoading, endLoading } = useLoading(false);

const tableData = ref<UserManagement.User[]>([]);
function setTableData(data: UserManagement.User[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchUserList();
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: Ref<DataTableColumns<UserManagement.User>> = ref([
  {
    key: 'index',
    title: 'order',
    align: 'center',
    resizable: true,
    width: 100,
    fixed: 'left'
  },
  {
    key: 'userName',
    title: 'Date',
    align: 'center',
    defaultSortOrder: 'ascend',
    resizable: true,
    fixed: 'left'
  },
  {
    key: 'userName',
    title: 'Ordered Product Sales',
    align: 'center',
    defaultSortOrder: 'ascend',
    resizable: true
  },
  {
    key: 'age',
    title: 'Ordered Product Sales - B2B',
    align: 'center',
    resizable: true
  },
  {
    key: 'phone',
    title: 'FNSKU/MSKU',
    align: 'center',
    defaultSortOrder: 'ascend',
    resizable: true
  },
  {
    key: 'email',
    title: 'Units Ordered',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Units Ordered - B2B',
    align: 'center',
    defaultSortOrder: 'ascend',
    resizable: true
  },
  {
    key: 'email',
    title: 'Total Order Items',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Total Order Items - B2B',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Page Views - Mobile App',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Page Views - Browser',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Page Views - Total',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Sessions - Mobile App',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Sessions - Browser',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Sessions - Total',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Buy Box Percentage',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Unit Session Percentage',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Unit Session Percentage - B2B',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Average Offer Count',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'Average Parent Items',
    align: 'center',
    resizable: true
  }
]) as Ref<DataTableColumns<UserManagement.User>>;

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped>
.searchPannel {
  padding: 0px 0 15px 0;
  display: flex;
}
</style>
