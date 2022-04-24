import { createStore } from 'vuex';

// module imports
import { packagesModule } from './modules/packages';

// const imports
import { Modules } from '@/constants/store';

export default createStore({
  // strict mode: in development, state will not be mutated outside of mutation handlers
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    [Modules.PACKAGE_MODULE]: packagesModule
  }
});
