import { PackagesState } from '@/constants/store';

export interface PackagesStateInterface {
  packages: string[];
}

export const state = {
  [PackagesState.PACKAGE_DETAILS]: null,
  // [PackagesState.PACKAGE_NAMES]: []
};
