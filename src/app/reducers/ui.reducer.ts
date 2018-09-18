import { uiActions, START_LOADING, STOP_LOADING } from './ui.action';

export interface State {
    isLoading: boolean;
}

const inititalState: State = {
    isLoading: false
}

export function uiReducer(state = inititalState, action: uiActions){

    switch (action.type) {
        case START_LOADING:
            return {
                isLoading: true
            };
        case STOP_LOADING:
            return {
                isLoading: false
            };
        default: {
            return state;
        }
    }
}

export const getIsLoading = (state: State) => state.isLoading;