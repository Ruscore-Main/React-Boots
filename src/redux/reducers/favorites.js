const initialState = {
    items: []
}

const ADD_FAVORITE = 'ADD_FAVORITE'

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE: {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        default: return state;
    }
}

export default favoritesReducer;