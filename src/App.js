import * as React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Spin } from 'antd';

import Nav from './components/Nav/Nav';

import Login from './components/Login/Login';
import { login } from './redux/actions/user';

const BookContainer = React.lazy(() =>
  import('./components/BookContainer/BookContainer')
);
const AddItem = React.lazy(() => import('./components/AddItem/AddItem'));
const AddBook = React.lazy(() => import('./components/AddBook/AddBook'));

const fallback = <Spin size="large" />;

function App(props) {
  if (!props.user) return <Login userProps={props} />;

  return (
    <React.Fragment>
      <Router>
        <React.Suspense fallback={fallback}>
          <Switch>
            {props.user === null && <Redirect to="/giris" />}
            <Route path="/" exact component={BookContainer} />
            <Route path="/ekle" exact component={AddItem} />
            <Route path="/ekle/kitap" exact component={AddBook} />
            <Route path="/giris" exact component={Login} />
          </Switch>
        </React.Suspense>
        <Nav />
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (x) => dispatch(login(x)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
