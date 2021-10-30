import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, {}, composeEnhancers(applyMiddleware(thunk)));

// после написания composeEnhancers мы не пишем window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
window.store = store;

export default store;