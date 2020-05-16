# fcc-10-js-calculator
## React-Redux
This project is writted with React and React-Redux to have central state management throughout the app. And `Webpack` will be installed.

- Selling poins of Redux : [medium article](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)
    - Deterministic state resolution
    - Transactional state
    - Isolate state management from I/O and side-effects
    - Single source of truth for app state
    - Easily share state between different components
    - Transaction telemetry (auto-logging action objects)
    - Time travel debugging

- Redux is useful if your component:
    - uses I/O like network or device APIs
    - saves or loads state
    - shares its state with non-child components
    - Deals with any business logic or data processing shared with other parts of the app

### Redux: persisting the state to the `local storage`
```js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
```

### Redux Toolkit with create-react-app
- `immer` library : allow us to mutate state in Redux store
    1. `mutating` state directly only works because of immer, but you are acutally NOT mutating the sttate
    2. need to ensure that you either mutate the state argument or return a new state, but not both!
    3. don't try to apply the `mutate` logic to a state that is a `primitive value`

- `createSlice()` : automatically generate `action` and `type` (captial constants) and doesn't have to like `switch`-`case&default` conditional statement  
    - `switch` is the place you would use spread operator not to mutate state
- `configureStore()` : replace `createStore()` in tranditional Redux
- default middleware : there is already `redux-thunk` installed so can just use thunk middleware
- `redux-devtools-extension`

- Install : template comes with a counter example in `features` directory
```
npm install @reduxjs/toolkit react-redux
npx create-react-app your-app --template redux
```
```js
import  { createSlice, PayloadAction } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosInitialState,
    reducers: {
        editTodo: (state, action) => {
            const todoToEdit = state.find(todo => todo.id === action.payload.id)
            if (todoToEdit) {
                todoToEdit.desc = action.payload.desc; // possible due to `immmer` can `mutate`!
            }
        },
        removeTodo: (state, action) => {
          const index = state.find(todo => todo.id === action.payload.id);
          if (index) {
              state.splice(index, 1);
          }  
        },
        addTodo(state, action) {
            const { id, desc } = action.payload;
            state.push({ id, text, completed: false })
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})
```

- `prepare()` : prepare callback must return an object with a field called `payload` inside
    - if you uses `createSlice`, it automatically calls `createAction` for you.
    - if you need to customize the payload (like todo (random)id generating -- `uuid()`), pass an object containing `reducer` and `prepare` fns to the `reducers object
    ```js
    let nextTodoId = 0
    const todosSlice = createSlice({
        name: 'todos',
        initialState: [],
        reducers: {
            addTodo: {
            reducer(state, action) {
                const { id, text } = action.payload
                state.push({ id, text, completed: false })
            },
            prepare(text) {
                return { payload: { text, id: nextTodoId++ } }
            }
            }
        }
    }
    ```

- `extraReducers` : can reference other action types from other reducers
    ```js
    const counterSlice = createSlice({
        name: 'counter',
        initialState: 0,
        reducers: {},
        extraReducers: {
            [todoSlice.actions.create]: state => state + 1
        }
    })
    ```

- `getDefaultMiddleware()` : when you want to use third party middleware
    - by default, RTK will provide `thunk`
    - for like `logger` need to use it with spread
    ```js
    const middleware = [...getDefaultMiddleware(), logger];
    ```

- Handle `async` using RTK : [Official Advaced Tutorial](https://redux-toolkit.js.org/tutorials/advanced-tutorial)
    - within your slice, have an error key for the case your asyn call is rejected
    - create reducers for both `success` state of th async call, and also the `rejected` state
    - separately create your `thunk` function that either dispatches the success action or the failed action

## Features
- It has basic calculation like MacOS version of calculation.
    - Operators : +, -, * %, +/-, C, =
    - Numbers : 0 - 10, . for decimal point
- In addition to basic one number display, it will show everything users type in the app and follow `formula/expression logic`

- Calculation like `2/7` will print the answer with 4 decimal numbers (`0.2857`).
    - used `+eval(state.value).toFixed(4)` : the plus sign at front will drop any extra zeros at the end.

## Webpack
I am going to usd `Webpack` for this project.
- Webpack takes a bunch of different types of files (many `.js`, `.jpg`, `.png`, etc) and bundles them to smaller group of file through `loader`.
- It manages dependencies.
``` js
// dev mode
___webpack_require__(import React ...)
// after npm build will creat `build` dir ==> 
```

## Screenshot
![WIP: in middle of calculation]('./rtk-cal/src/WIP-cal.png')