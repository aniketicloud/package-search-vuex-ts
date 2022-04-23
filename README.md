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
