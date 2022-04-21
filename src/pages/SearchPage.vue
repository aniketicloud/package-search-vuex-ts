<template>
  <div>
    <PackageSearch />
    <PackageList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PackageSearch from '../components/PackageSearch.vue';
import PackageList from '../components/PackageList.vue';

export default defineComponent({
  name: 'SearchPage',
  components: {
    PackageList,
    PackageSearch
  },
  data() {
    return {};
  },

  methods: {}
});
</script>
