import { CURRENT_PATH_ACTION_TYPES } from "./currentPath.types";

const INITIAL_STATE = {
    currentPath: '/'
}

export const currentPathReducer = (state = INITIAL_STATE.currentPath, action) => {
    const {type, payload } = action;

    switch(type) {

        case CURRENT_PATH_ACTION_TYPES.SET_CURRENT_PATH : 
            return {currentPath: payload}

        default: 
            return state;
    }
}