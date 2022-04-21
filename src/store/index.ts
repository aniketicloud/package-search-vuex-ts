import { createStore } from 'vuex';

// module imports
import { packagesModule } from './modules/packages';

// const imports
import { Modules } from '@/constants/store';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    [Modules.PACKAGE_MODULE]: packagesModule
  }
});
