# Program BeliMudah -> Andromeda rebrand(On Going)

Aplikasi e-commerce berbasiskan website dengan menggunakan React Js sebagai External library helper

### Link: https://beli-mudah.vercel.app/

### Tech Stacks:
- React Js v19.2.6
- Vite v8.0.12
- TailwindCss v4.3.0
- React Redux v9.3.0
- Redux persist v6.0.0
- Yup v1.7.1
- React Hook Form v7.79.0

## Data json:
Beberapa components dibangun secara dimanis sehingga untuk listnya sendiri akan berdasarkan jumlah datanya yang tersipan di directory ```/public/data```
```text
/data
├── brand.json
├── categories.json
├── dashboard-menu.json
├── product.json
├── sidemenu-profile.json
```
Manipulasi data pada aplikasi ini menggunakan Redux perist untuk Read-Write ke local storage

### Redux's Reducer
```js
const persistReducerAccountsConfig = {
  key:"accounts",
  storage
}

const persistReducerSessionConfig = {
  key:"session",
  storage
}

const reducer = combineReducers({
  accounts:persistReducer(persistReducerAccountsConfig, accounts),
  session:persistReducer(persistReducerSessionConfig, session)
})

export default reducer
```




