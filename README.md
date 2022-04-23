# package-search-vuex-ts

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

# How to add new state with typescript

## constants

- All the constants can be added in folder below
  - `src\constants\`
  - e.g. for all the constants of vuex store, you can make the directory called `constants => store`.
  - add `index.ts` at the root of the directory to access the constants easily from simgle source.
  - e.g. in vuex store example,
    - if you have more constants for state, getters, mutations, actions; then make respective files like state.ts, getters.ts mutations.ts, actions.ts.
    - then import constatnts from each file in index.ts to have one place for import & export
- inside the constants, make use of typescript `enum` to have fixed value of the constants.
- these constants can be accessed with `@/constants` from anywhere
- e.g. if you have UserStoreMutations enum like below

```
enum UserStoreMutations {
  SET_ALL_USERS = 'SET_ALL_USERS'
}
```

- then you only have to type UserStoreMutations and use autocomplete to get the constants.
- this way you will never have to go back to mutations folder to check which mutation you want use. Also there will be no typing mistake ever.

## typings or interfaces

- All the typings or interfaces can be added in folder below
  - `src\typings\`
  - just like in `constants` use the same design pattern of adding `index.ts` to have single source of access

## Procedure to add new state and it's currosponding operations

- I am taking an example of one common state in vuex store and that is `loading` state

1. Enum

   - Add new enums in `src\constants\store\index.ts` like below ( there are not many constants, so I am just adding everything in `index.ts`)
     - state enum
     - getters enum
     - mutation enum
     - in this example enum in actions is not required, but we can add the enum for fetching data

   ```
   // state
   export enum PackagesState {
     LOADING = 'loading',
   }

   // getters
   export enum PackagesGetters {
     GET_LOADING_STATE = 'getLoadingState'
   }

   // mutations
   export enum PackagesMutations {
     SET_LOADING = 'SET_LOADING'
   }

   ```

2. Interface or Typing

   - Edit or Add new interface in `src\typings\store\index.ts` like below ( there are not many interfaces, so I am just adding everything in `index.ts`)
   - In this example, you only need to edit the interface for vuex store state
   - just type [PackagesState] and use auto complete.
   - VS Code Editor will auto import the enum and will show you the available vuex state

   ```
   export interface PackagesStoreStateInterface {
   [PackagesState.PACKAGE_DETAILS]: null | PackageDetails[];
   [PackagesState.LOADING]: boolean
   }
   ```

3. State, Getters, Mutations, Actions(if any) for the new state ( loading )

   - Open state.ts| getters.ts |mutations.ts | actions.ts from store folder. ( just hit Ctrl + P and type the name of the file )
   - Use auto complete to add the enum name for the particular function in these files.
   - I recommend to start from state.ts

   ```
   // state.ts
   export const state: PackagesStoreStateInterface = {
      [PackagesState.PACKAGE_DETAILS]: null,
      [PackagesState.LOADING]: false
    };

    // getters.ts
    [PackagesGetters.GET_LOADING_STATE](state: PackagesStoreStateInterface) {
      return state.loading;
    }

    // mutations.ts
    [PackagesMutations.SET_LOADING](
    state: PackagesStoreStateInterface,
    loadingStatePayload: boolean
    ) {
      state.loading = loadingStatePayload;
    }

   ```

4. Implementing the new state in Vuex

   - In this example, you should set the `loading` state
   - to `true` : when you are fetching the data from the API end poing ( from the backend ) and
   - to `false` : when the http requests succeeds or fails. ( with try catch block)
   - So open `actions.ts` ( Ctrl + P and type actions) and commit the mutations like following

   ```
    async [PackagesActions.FETCH_PACKAGES]({ commit }: any, searchParam: string) {
      try {

        // set loading to true when you are making a http request
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
        // => set loading to false when the http request is a success
        commit(PackagesMutations.SET_LOADING, false);
      } catch (error) {
        console.log('Error: ', error);

        // => set loading to false when the http request is failed
        commit(PackagesMutations.SET_LOADING, false);
      }
    }
   ```

5. Using the Vuex in Vue components

   - In this example, you should set show the list of packages based on the `loading` state
   - To make use of enum in Vue components, instead of accessing the store with `$store`, use helper functions like mapGetters, mapMutations, mapActions.
   - This way, the code will be cleaner and easy to work with ( for me at least)
   - For example, first argument in mapGetters is Module Name(optional) and the second argument is map of getters you want to use
   - You can get the module name with enum import. Just type Modules and import the module name.
   - for second argument, you can use the getters as it is by passing the names as strings in an array. ( like ['getterA', ModuleGetter.GETTER_ONE])
   - OR => for second argument pass an object like this

   ```
    ...mapGetters(Modules.PACKAGE_MODULE, {
      ifLoading: PackagesGetters.GET_LOADING_STATE
    })
   ```

   - if you want to pass the argument in this format like in when you are calling the mutation/action with map helper function. see below

   ```
    ...mapActions(Modules.PACKAGE_MODULE, {
        fetchPackageDetails: PackagesActions.FETCH_PACKAGES
      })
   ```

   ```
    <template>
      <button @click="fetchPackageDetails(searchTerm)">
        Search
      </button>
    </template>
   ```
