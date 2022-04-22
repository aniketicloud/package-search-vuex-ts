import { PackagesGetters } from '@/constants/store';

export const getters = {
  [PackagesGetters.GET_PACKAGE_DETAILS](state: any) {
    return state.packageDetails;
  },

  [PackagesGetters.GET_PACKAGE_NAMES](state: any, getters: any) {
    const packageNames = state.packageDetails.map((_package: any) => {
      return _package.package.name;
    });
    return packageNames;
  }
};
