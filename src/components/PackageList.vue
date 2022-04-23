<template>
  <div>
    <ul v-for="packageName in packageNames" :key="packageName">
      <li>{{ packageName }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Modules, PackagesGetters } from '@/constants/store';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'PackageList',
  computed: {
    // !! mapGetters(namespace?: string, map: Array<string> | Object<string>): Object
    ...mapGetters(Modules.PACKAGE_MODULE, {
      packageNames: PackagesGetters.GET_PACKAGE_NAMES
    })
  }
});
</script>
