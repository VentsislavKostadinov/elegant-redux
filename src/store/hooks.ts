import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { DispatchFunction } from './redux-model/DispatchFunctionProps'
import { RootState } from './store'

export const useCartDispatch: DispatchFunction = useDispatch

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector
