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
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'PackageSearch',
  data() {
    return {
      searchTerm: ''
    };
  },

  methods: {
    ...mapActions('packagesModule', {
      fetchPackageDetails: 'fetchPackages'
    })
  }
});
</script>

<style scoped></style>
