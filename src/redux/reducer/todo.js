const initialState = {};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const addState = { ...state };
            const id = Math.random() * 9999999999;
            addState[id.toFixed(0)] = {
                text: action.text
            };
            return addState;
        case "REMOVE_TODO":
            const removeState = { ...state };
            delete removeState[action.id];
            return removeState;




        default:
            return state;
    }
}

export default todo;