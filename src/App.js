/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import store from './redux/store';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <ItemContainer cake />
        <ItemContainer /> */}

        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
