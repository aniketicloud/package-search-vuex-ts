import { PackagesGetters } from '@/constants/store';
import { PackagesStoreStateInterface } from '@/typings/store';

export const getters = {
  [PackagesGetters.GET_PACKAGE_DETAILS](state: PackagesStoreStateInterface) {
    return state.packageDetails;
  },

  [PackagesGetters.GET_PACKAGE_NAMES](state: PackagesStoreStateInterface) {
    const packageNames = state.packageDetails?.map((_packageItem) => {
      return _packageItem.package.name;
    });
    return packageNames;
  },

  [PackagesGetters.GET_LOADING_STATE](state: PackagesStoreStateInterface) {
    return state.loading;
  },

  [PackagesGetters.GET_ERROR](state: PackagesStoreStateInterface) {
    return state.error;
  }
};
