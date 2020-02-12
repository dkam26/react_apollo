import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apiConnection';
import AddShoppinglist from './component/AddShoppinglist';
import Shoppinglists from './component/Shoppinglists';
import AddItem from './component/AddItem';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => (
  <main>
      <Switch>
        <ApolloProvider client={client}>
        <Route path='/' component={Shoppinglists} exact/>
        <Route path='/add' component={AddShoppinglist} />
        <Route path='/add-item' component={AddItem} />
        </ApolloProvider>
    </Switch>
  </main>
  );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
