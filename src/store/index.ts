import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducers from './reducer';



export default createStore(RootReducers, applyMiddleware(thunk));