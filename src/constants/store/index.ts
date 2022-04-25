export enum Modules {
  PACKAGE_MODULE = 'packagesModule'
}

export enum PackagesState {
  PACKAGE_DETAILS = 'packageDetails',
  LOADING = 'loading',
  ERROR = 'error'
}

export enum PackagesGetters {
  GET_PACKAGE_DETAILS = 'getPackageDetails',
  GET_PACKAGE_NAMES = 'getPackageNames',
  GET_LOADING_STATE = 'getLoadingState',
  GET_ERROR = 'getError'
}

export enum PackagesMutations {
  SET_PACKAGE_DETAILS = 'SET_PACKAGE_DETAILS',
  SET_PACKAGE_NAMES = 'SET_PACKAGE_NAMES',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export enum PackagesActions {
  FETCH_PACKAGES = 'fetchPackages'
}
