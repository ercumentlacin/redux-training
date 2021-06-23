import { Provider } from 'react-redux';
import store from './redux/store';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

import './App.css';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
