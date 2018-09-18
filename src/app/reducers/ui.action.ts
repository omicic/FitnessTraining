import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export class SetStartLoading implements Action{
    readonly type = START_LOADING;
}

export class SetStopLoading implements Action{
    readonly type = STOP_LOADING;
}

export type uiActions = SetStartLoading | SetStopLoading;