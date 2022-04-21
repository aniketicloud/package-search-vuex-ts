<template>
  <div>
    <h1>Search NPM Packges</h1>
    <input type="search" v-model="searchTerm" />
    <button type="submit" @click="fetchPackageDetails(searchTerm)">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// store imports
import { Modules, PackagesActions } from '@/constants/store';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'PackageSearch',
  data() {
    return {
      searchTerm: 'react'
    };
  },

  methods: {
    ...mapActions(Modules.PACKAGE_MODULE, {
      fetchPackageDetails: PackagesActions.FETCH_PACKAGES
    })
  }
});
</script>

<style scoped></style>
