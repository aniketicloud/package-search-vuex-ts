import { PackagesState } from '@/constants/store';

export interface ApiResponseData {
  objects: PackageDetails[];
  time: string;
  total: number;
}
export interface PackagesStoreStateInterface {
  [PackagesState.PACKAGE_DETAILS]: null | PackageDetails[];
}
export interface PackageInterface {
  name: string;
  date: string;
  description: string;
  version: string;
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
