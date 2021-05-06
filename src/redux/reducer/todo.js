const initialState = {};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newState = { ...state };
            const id = Math.random() 
    }
}