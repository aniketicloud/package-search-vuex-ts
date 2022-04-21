import { PackagesGetters } from '@/constants/store';

export const getters = {
  [PackagesGetters.GET_ALL_PACKAGE_DETAILS](state: any) {
    return state.packages;
  }
};
