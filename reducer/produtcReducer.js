export const initialState = {
    products: [],
  };
  
export  const productReducer = (state, action) => {
    switch (action.type) {
      case "SET_PRODUCT": {
        return {
          ...state,
          products: action.payload,
        };
      }
  
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload],
        };

        case "REMOVE_PRODUCT":
        return {
          ...state,
          products: products.filter((item)=> item.id !== id),
        };
  
  
      default:
        return state;
    }
  };