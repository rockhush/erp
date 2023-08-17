<template>
  <n-space vertical>
    <n-input-group>
      <n-select v-model:value="singleValue" :style="{ width: '40%' }" :options="selectOptions" clearable />
      <n-input :style="{ width: '60%' }" clearable />
      <n-button type="primary">搜索</n-button>
    </n-input-group>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      singleValue: ref('1'),
      selectOptions: ref([
        {
          label: '产品名称',
          value: '1'
        },
        {
          label: 'MSKU',
          value: '2'
        },
        {
          label: 'FNSKU',
          value: '3'
        },
        {
          label: 'CenterId',
          value: '4'
        },
        {
          label: '交易商品编号',
          value: '5'
        }
      ])
    };
  }
});
</script>
