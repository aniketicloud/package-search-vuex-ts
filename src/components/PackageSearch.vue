<template>
  <div>
    <h1>Search NPM Packges</h1>
    <input type="search" v-model="searchterm" />
    <button type="submit" @click="fetchPackageDetails(searchterm)">
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
      searchterm: ''
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
