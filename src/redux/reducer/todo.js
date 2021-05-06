import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = {};

const add = (state, action) => {
    const id = Math.random() * 9999999999;
    state[id.toFixed(0)] = {
        text: action.text,
        done: false
    };
    return state;
}

const remove = (state, action) => {
    delete state[action.id];
    return state;
}

const toggle = (state, action) => {
    state[action.id].done = !state[action.id].done;
    return state;
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return add({ ...state }, action);
        case REMOVE_TODO:
            return remove({ ...state }, action);
        case TOGGLE_TODO:
            return toggle({ ...state }, action);

        default:
            return state;
    }
}

export default todo;