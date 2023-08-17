<template>
  <n-space vertical>
    <n-radio-group v-model:value="value" name="radiobuttongroup1">
      <n-radio-button v-for="song in songs" :key="song.value" :value="song.value" :label="song.label" />
    </n-radio-group>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value: ref('1'),
      songs: [
        {
          value: '1',
          label: '销售量与访问量'
        },
        {
          value: '2',
          label: '详情页面上的销售量与访问量'
        }
      ].map(s => {
        s.value = s.value.toLowerCase();
        return s;
      })
    };
  }
});
</script>
