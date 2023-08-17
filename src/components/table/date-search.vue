<template>
  <n-space vertical>
    <n-input-group>
      <n-select v-model:value="singleValue" :style="{ width: '40%' }" :options="selectOptions" clearable />
      <n-date-picker
        v-model:value="range1"
        type="daterange"
        :shortcuts="rangeShortcuts"
        :update-value-on-close="true"
        clearable
      />
    </n-input-group>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      singleValue: ref('1'),
      range1: ref(null),
      shortcuts: {
        亲爱的生日: 1631203200000,
        派对日: 1629216000000,
        昨天: () => new Date().getTime() - 24 * 60 * 60 * 1000
      },
      rangeShortcuts: {
        快乐假期: [1629216000000, 1631203200000] as const,
        近2小时: () => {
          const cur = new Date().getTime();
          return [cur - 2 * 60 * 60 * 1000, cur] as const;
        }
      },
      selectOptions: ref([
        {
          label: '盘点日期（零时区）',
          value: '1'
        },
        {
          label: '盘点日期（市场时区）',
          value: '2'
        }
      ])
    };
  }
});
</script>
