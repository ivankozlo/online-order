import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store : any

const initialState: any = {
  category: -1
}

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

function initStore(preloadedState: any = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store: any = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
