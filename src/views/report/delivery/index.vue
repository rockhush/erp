<template>
  <div class="overflow-hidden">
    <n-card title="配送信息" :bordered="false" class="h-full rounded-8px shadow-sm">
      <div class="searchPannel">
        <onlySelect style="width: 180px" show-titles="国家" :select-options="changeList"></onlySelect>
        <onlySelect
          style="width: 180px; margin-left: 15px"
          show-titles="店铺"
          :select-options="changeList"
        ></onlySelect>
        <dateSearch style="width: 400px; margin-left: 15px"></dateSearch>
        <inputGroup style="width: 280px; margin-left: 15px"></inputGroup>
        <onlySelect
          style="width: 180px; margin-left: 15px"
          show-titles="订单类型"
          :select-options="changeList"
        ></onlySelect>
        <onlySelect
          style="width: 180px; margin-left: 15px"
          show-titles="收货国家"
          :select-options="changeList"
        ></onlySelect>
        <n-button strong secondary round type="info" style="margin-left: 15px" size="medium">重置</n-button>
      </div>
      <div class="flex-col h-full" style="height: 625px">
        <n-space class="pb-12px" justify="space-between">
          <n-space>
            <n-button type="success" size="small">
              <icon-uil:export class="mr-4px text-16px" />
              导出报表
            </n-button>
          </n-space>
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
import inputGroup from '@/components/table/input-group.vue';
import ColumnSetting from '@/components/table/column-setting.vue';
import linkageSearch from '@/components/table/linkage-search.vue';
import onlySelect from '@/components/table/only-select.vue';
import dateSearch from '@/components/table/date-search.vue';

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
const changeList = ref([
  {
    label: '已残损',
    value: '1'
  },
  {
    label: '弃置库存',
    value: '2'
  },
  {
    label: '已找到',
    value: '3'
  },
  {
    label: '丢失',
    value: '4'
  }
]);
const columns: Ref<DataTableColumns<UserManagement.User>> = ref([
  {
    key: 'index',
    title: '序号',
    align: 'center',
    resizable: true,
    width: 100
  },
  {
    key: 'userName',
    title: '订单编号',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'age',
    title: '图片',
    align: 'center',
    resizable: true
  },
  {
    key: 'phone',
    title: '商品标题/ASIN/MSKU',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'email',
    title: '产品名称/SKU',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '卖家订单编号',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'email',
    title: '货件ID',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '订单商品编号',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '订货时间(市场时间)',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '付款时间(市场时区)',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '销售渠道',
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
