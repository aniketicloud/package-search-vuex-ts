import { PackagesMutations } from '@/constants/store';

export const mutations = {
  [PackagesMutations.SET_PACKAGE_DETAILS](state: any, packagesData: any) {
    state.packageDetails = packagesData.objects;
  }
};
