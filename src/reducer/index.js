
import { combineReducers } from 'redux';
import { productReducer } from './producReducer';
export const rootReducer = combineReducers({
    products: productReducer,
})