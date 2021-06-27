import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import bookReducer from './reducers/book';
import goBackReducer from './reducers/goBack';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  goBack: goBackReducer,
  book: bookReducer,
});

export default rootReducer;
