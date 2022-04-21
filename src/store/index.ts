import { createStore } from 'vuex';
import axios from 'axios';

const npm_search_url: string = 'https://registry.npmjs.org/-/v1/search';

const packagesModule = {
  namespaced: true,
  state: () => ({
    packages: null,
    loading: null,
    error: null
    // packages: Object,
    // loading: Boolean,
    // error: String
  }),
  getters: {
    getPackageNames(state: any) {
      return state.packages;
    }
  },
  mutations: {
    setPackages(state: any, packagesData: any) {
      state.packages = packagesData;
    }
  },
  actions: {
    async fetchPackages({ commit }: any, searchParam: string) {
      try {
        const { data } = await axios.get(npm_search_url, {
          params: {
            text: searchParam
          }
        });

        commit('setPackages', data);
      } catch (error) {
        console.log('Error: ', error);
      }
    }
  }
};

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    packagesModule: packagesModule
  }
});
