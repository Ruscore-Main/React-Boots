const SET_BOOTS = 'SET_BOOTS',
SET_LOADED = 'SET_LOADED';

const initialState = {
    items: {},
    isLoaded: false
}

const bootsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOTS: {
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        }

        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        default: return state;
    }
}

export default bootsReducer;