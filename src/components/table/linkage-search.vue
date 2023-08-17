<template>
  <n-space vertical>
    <n-cascader
      v-model:value="value"
      multiple
      clearable
      placeholder="店铺/仓库"
      :max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
      :expand-trigger="hoverTrigger ? 'hover' : 'click'"
      :options="options"
      :cascade="cascade"
      :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
      :show-path="showPath"
      :filterable="filterable"
      :clear-filter-after-select="clearFilterAfterSelect"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
const options = ref([
  {
    value: 1,
    label: 'LBR',
    children: [
      {
        value: 2,
        label: 'LBR-FBA'
      }
    ]
  }
]);

export default defineComponent({
  setup() {
    return {
      checkStrategyIsChild: ref(true),
      cascade: ref(true),
      showPath: ref(true),
      hoverTrigger: ref(false),
      value: ref(null),
      filterable: ref(false),
      responsiveMaxTagCount: ref(true),
      clearFilterAfterSelect: ref(true),
      options: options.value,
      handleUpdateValue(value: string[]) {
        // eslint-disable-next-line no-console
        console.log(value);
      }
    };
  }
});
</script>
