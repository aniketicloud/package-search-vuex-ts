<template>
  <ul v-for="number in [1, 2, 3]" :key="number">
    <li>{{ number }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PackageList',
  data() {
    return {
      items: []
    };
  }
});
</script>
