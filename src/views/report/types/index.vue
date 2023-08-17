<template>
  <div class="overflow-hidden">
    <n-card title="FBA库存分类账" :bordered="false" class="h-full rounded-8px shadow-sm">
      <div class="searchPannel">
        <linkageSearch style="width: 220px"></linkageSearch>
        <inputGroup style="width: 320px; margin-left: 15px"></inputGroup>
        <onlySelect
          style="width: 180px; margin-left: 15px"
          show-titles="国家"
          :select-options="changeList"
        ></onlySelect>
        <dateSearch style="width: 500px; margin-left: 15px"></dateSearch>
        <onlySelect
          style="width: 220px; margin-left: 15px"
          show-titles="请选择库存属性"
          :select-options="attributeList"
        ></onlySelect>
        <n-button strong secondary round type="info" style="margin-left: 15px" size="medium">重置</n-button>
      </div>
      <div class="flex-col h-full" style="height: 625px">
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
  },
  {
    label: '其他',
    value: '5'
  }
]);
const attributeList = ref([
  {
    label: '可售',
    value: '1'
  },
  {
    label: '存在瑕疵',
    value: '2'
  },
  {
    label: '因买家导致的残损',
    value: '3'
  },
  {
    label: '因分销导致的残损',
    value: '4'
  },
  {
    label: '已过期',
    value: '5'
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
    title: '店铺仓库',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'age',
    title: '日期/月份',
    align: 'center',
    resizable: true
  },
  {
    key: 'phone',
    title: '原表MSKU',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'email',
    title: 'FNSKU/MSKU',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: 'ASIN',
    align: 'center',
    defaultSortOrder: 'ascend',
    sorter: 'default',
    resizable: true
  },
  {
    key: 'email',
    title: '库存属性',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '起始仓库余额',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '期末仓库余额',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '在库房之间转运中',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '接收',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '买家货件',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '买家退货',
    align: 'center',
    resizable: true
  },
  {
    key: 'email',
    title: '已移除',
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
