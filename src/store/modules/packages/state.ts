import { PackagesState } from '@/constants/store';
import { PackagesStoreStateInterface } from '@/typings/store';

export const state: PackagesStoreStateInterface = {
  [PackagesState.PACKAGE_DETAILS]: null,
  [PackagesState.LOADING]: false
};
