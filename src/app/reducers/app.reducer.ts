import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromUI from './ui.reducer';

export interface State {
  auth: fromAuth.State;
  ui: fromUI.State
  }

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer,
    ui: fromUI.uiReducer
};

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

export const getIsLoadingState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getIsLoadingState, fromUI.getIsLoading);