import { PackagesActions, PackagesMutations } from '@/constants/store';
import { ApiResponseData } from '@/typings/store';
import axios from 'axios';

const npm_search_url: string = 'https://registry.npmjs.org/-/v1/search';

export const actions = {
  async [PackagesActions.FETCH_PACKAGES]({ commit }: any, searchParam: string) {
    try {
      commit(PackagesMutations.SET_LOADING, true);
      const response: { data: ApiResponseData } = await axios.get(
        npm_search_url,
        {
          params: {
            text: searchParam
          }
        }
      );

      commit(PackagesMutations.SET_PACKAGE_DETAILS, response.data);
      commit(PackagesMutations.SET_LOADING, false);
    } catch (error) {
      console.log('Error: ', error);
      commit(PackagesMutations.SET_LOADING, false);
    }
  }
};
