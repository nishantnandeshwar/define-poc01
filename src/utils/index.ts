import {
    TypedUseSelectorHook,
    useDispatch as useReactReduxDispatch,
    useSelector as useReactReduxSelector,
} from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../index';

export type TypedDispatch = ThunkDispatch<RootState, unknown, Action>;
export interface TypedUseDispatchHook<TState> {
    (): TState;
}

export const useAppSelector: TypedUseSelectorHook<RootState> =
    useReactReduxSelector;
export const useAppDispatch: TypedUseDispatchHook<TypedDispatch> =
    useReactReduxDispatch;