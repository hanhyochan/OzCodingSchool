// redux
// import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
// import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { thunk } from "redux-thunk"

// const increment1 = {
//   type: 'increment1'
// }

// const decrement1 = {
//   type: 'decrement1'
// }

// const increment2 = {
//   type: 'increment2'
// }

// const decrement2 = {
//   type: 'decrement2'
// }

// const counter1Reducer = (state = 4, action) => {
//   switch (action.type) {
//     case 'increment1':
//       return state + 1
//     case 'decrement1':
//       return state - 1
//     default:
//       return state
//   }
// }

// const counter2Reducer = (state = 1, action) => {
//   switch (action.type) {
//     case 'increment2':
//       return state + 1
//     case 'decrement2':
//       return state - 1
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({ counter1Reducer, counter2Reducer })

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// function App() {
//   const counter1 = useSelector((state) => state.counter1Reducer)
//   const counter2 = useSelector((state) => state.counter2Reducer)
//   const dispatch = useDispatch()

//   return (
//     <>
//       <div>Counter1: {counter1}</div>
//       <button onClick={() => dispatch((dispatch) => {
//         setTimeout(() => {
//           dispatch(increment1)
//         }, 1000);
//       })}>+</button>
//       <button onClick={() => dispatch((dispatch) => {
//         setTimeout(() => {
//           dispatch(decrement1)
//         }, 1000);
//       })}>-</button>

//       <div>Counter2: {counter2}</div>
//       <button onClick={() => dispatch(increment2)}>+</button>
//       <button onClick={() => dispatch(decrement2)}>-</button>
//     </>
//   )
// }

// export default App





// redux toolkit
import './App.css'
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import { useSelector, useDispatch } from "react-redux"

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state, action) { return state + 1 },
    decrement(state, action) { return state - 1 }
  }
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

const slowIncrementThunk = createAsyncThunk(
  'counter/slowIncrement',
  (value, {dispatch}) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment())
    }, 1000);
  }
)

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => { dispatch(slowIncrementThunk()) }}>+</button>
      <button onClick={() => { dispatch(counterSlice.actions.decrement()) }}>-</button>
    </>
  )
}

export default App
