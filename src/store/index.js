import { createStore } from 'redux';

const initialState = {
  grills: []
};

const ottenReducer = function(state = initialState, action) {
  console.log("Wir haben folgende Action getriggert:", action.type, action);
  switch (action.type) {

    case 'OTTEN_LOADED':
      return {
        ...state,
        otten: action.data
      };

    default:
      return state;
  }
};

const store = createStore(ottenReducer);

export default store;
