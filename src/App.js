import { Provider } from 'react-redux';
import store from './redux/store';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
