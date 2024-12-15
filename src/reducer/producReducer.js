import { ADD_PRODUCT, UPDATE_PRODUCT, SET_PRODUCTS, REMOVE_PRODUCT } from "../action/productAction";


export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) => item.id === action.payload.id ? action.payload : item),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
