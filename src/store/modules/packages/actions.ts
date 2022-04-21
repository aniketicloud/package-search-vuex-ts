import { PackagesActions, PackagesMutations } from '@/constants/store';
import axios from 'axios';

const npm_search_url: string = 'https://registry.npmjs.org/-/v1/search';

export const actions = {
  async [PackagesActions.FETCH_PACKAGES]({ commit }: any, searchParam: string) {
    try {
      const { data } = await axios.get(npm_search_url, {
        params: {
          text: searchParam
        }
      });

      commit(PackagesMutations.SET_ALL_PACKAGE_DETAILS, data);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
};
