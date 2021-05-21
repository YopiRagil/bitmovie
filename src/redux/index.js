import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducers';

const rootReducer = combineReducers({
  movie: movieReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {});

export default store;
