import { createStore } from 'redux';

const initialState = {
  otten: [],
  otten_basket: [],
  basket_price: 0
};

let removeByAttr = function(arr, attr, value){
  let i = arr.length;
  while(i--){
    if( arr[i]
      && arr[i].hasOwnProperty(attr)
      && (arguments.length > 2 && arr[i][attr] === value ) ){

      arr.splice(i,1);

    }
  }
  return arr;
};

const ottenReducer = function(state = initialState, action) {
  console.log("Wir haben folgende Action getriggert:", action.type, action);
  console.log("in reducer");
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

    case 'REMOVE_OTTEN_FROM_BASKET':
      console.log(state);
      console.log("heyy");
      return {
        ...state,
        otten_basket: state.otten_basket.splice(action.data)
      };

    case 'BASKET_PRICE':
      console.log(state);
      return {
        ...state,
        basket_price: state.basket_price += action.data
      };

    case 'DELETE_OTTEN':
      console.log(state);
      return {
        ...state,
        otten: removeByAttr(state.otten, 'id', action.data)
  };

    default:
      return state;
  }
};

const store = createStore(ottenReducer);

export default store;
