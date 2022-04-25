import { PackagesMutations } from '@/constants/store';
import { ApiResponseData, PackagesStoreStateInterface } from '@/typings/store';

export const mutations = {
  [PackagesMutations.SET_PACKAGE_DETAILS](
    state: PackagesStoreStateInterface,
    packagesData: ApiResponseData
  ) {
    state.packageDetails = packagesData.objects;
  },

  [PackagesMutations.SET_LOADING](
    state: PackagesStoreStateInterface,
    loadingStatePayload: boolean
  ) {
    state.loading = loadingStatePayload;
  },

  [PackagesMutations.SET_ERROR](
    state: PackagesStoreStateInterface,
    errorPayload: string | null
  ) {
    state.error = errorPayload;
  }
};
