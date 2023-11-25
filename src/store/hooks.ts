import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { DispatchFunction } from './redux-model/DispatchFunctionProps'

export const useCartDispatch: DispatchFunction = useDispatch

export const useCartSelector: TypedUseSelectorHook = useSelector
