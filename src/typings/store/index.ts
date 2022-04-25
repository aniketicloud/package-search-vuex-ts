import { PackagesState } from '@/constants/store';

// vuex state interface as it is mosly used
//  as an argument to the new functions in getters and mutations
export interface PackagesStoreStateInterface {
  [PackagesState.PACKAGE_DETAILS]: null | PackageDetails[];
  [PackagesState.LOADING]: boolean;
  [PackagesState.ERROR]: string | null;
}

// interfaces for data you will use through out the application
export interface ApiResponseData {
  objects: PackageDetails[];
  time: string;
  total: number;
}
interface PackageDetails {
  package: PackageInterface;
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  };
  searchScore: number;
}
export interface PackageInterface {
  name: string;
  date: string;
  description: string;
  version: string;
}
