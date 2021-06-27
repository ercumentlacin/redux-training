import { GO_BACK } from '../types/goBack';

const initialState = {};

const goBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_BACK:
      return {
        ...state,
        goBack: action.payload.goBack(),
      };

    default:
      return state;
  }
};

export default goBackReducer;
