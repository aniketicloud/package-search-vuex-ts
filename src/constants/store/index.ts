export enum Modules {
  PACKAGE_MODULE = 'packagesModule'
}

export enum PackagesState {
  PACKAGE_DETAILS = 'packageDetails',
  LOADING = 'loading'
}

export enum PackagesGetters {
  GET_PACKAGE_DETAILS = 'getPackageDetails',
  GET_PACKAGE_NAMES = 'getPackageNames',
  GET_LOADING_STATE = 'getLoadingState'
}

export enum PackagesMutations {
  SET_PACKAGE_DETAILS = 'SET_PACKAGE_DETAILS',
  SET_PACKAGE_NAMES = 'SET_PACKAGE_NAMES',
  SET_LOADING = 'SET_LOADING'
}

export enum PackagesActions {
  FETCH_PACKAGES = 'fetchPackages'
}
