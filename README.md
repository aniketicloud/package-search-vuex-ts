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
