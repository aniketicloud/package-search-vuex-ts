import { PackagesMutations } from '@/constants/store';

export const mutations = {
  [PackagesMutations.SET_ALL_PACKAGE_DETAILS](state: any, packagesData: any) {
    state.packages = packagesData;
  }
};
