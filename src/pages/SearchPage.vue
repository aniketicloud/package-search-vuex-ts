<template>
  <div>
    <PackageSearch />
    <div>
      <div v-if="!ifLoading">
        <PackageList />
      </div>
      <div v-else>Loading . . .</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PackageSearch from '../components/PackageSearch.vue';
import PackageList from '../components/PackageList.vue';
import { mapGetters } from 'vuex';
import { Modules, PackagesGetters } from '@/constants/store';

export default defineComponent({
  name: 'SearchPage',
  components: {
    PackageList,
    PackageSearch
  },
  computed: {
    ...mapGetters(Modules.PACKAGE_MODULE, {
      ifLoading: PackagesGetters.GET_LOADING_STATE
    })
  }
});
</script>
