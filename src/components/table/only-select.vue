<template>
  <n-space vertical>
    <n-input-group>
      <n-select :options="navList" clearable :placeholder="showTitles" />
    </n-input-group>
  </n-space>
</template>

<script lang="ts" setup name="NavList">
import { toRefs } from 'vue';
// export interface Props {
//   label: number;
//   value: string;
// }

const props = defineProps<{
  navList: {
    label: string;
    value: string;
  };
  showTitles: string;
}>();
const { navList } = toRefs(props);
const { showTitles } = toRefs(props);
// export default defineComponent({
//   props: {
//     showTitles: {
//       type: String,
//       default: ''
//     }
//   }
// });
</script>
