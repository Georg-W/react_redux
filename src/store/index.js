import { createStore } from 'redux';

const initialState = {
  otten: [],
  otten_basket: [],
  basket_price: 0
};

const ottenReducer = function(state = initialState, action) {
  console.log("Wir haben folgende Action getriggert:", action.type, action);
  switch (action.type) {

    case 'OTTEN_LOADED':
      return {
        ...state,
        otten: action.data
      };

    case 'OTTEN_IN_BASKET':
      console.log(state);
      return {
        ...state,
        otten_basket: [
          ...state.otten_basket,
          action.data
        ]
      };

    case 'BASKET_PRICE':
      console.log(state);
      return {
        ...state,
        basket_price: state.basket_price += action.data
      };

    default:
      return state;
  }
};

const store = createStore(ottenReducer);

export default store;
