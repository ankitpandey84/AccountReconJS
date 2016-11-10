/*
This is entry point for the the redux application
this is the file first executed to create the bundle.

This is very important because there is a create store object instantiated
for the the combine reducers object imported from the reducers, for this context
allReducers is the combine reducers object passed from the reducers .
What ever is exported can be saved in any varible if not used in curly brackets
after import keyword. For example here AllReducers is exported as a allReducers
from the reducers file.

Provider is linking the store object to the containers's state variable

create store is taking the argument AllReducers and then allReducers object is available
at the store. That store object  is passed to Provider and thus with the help
of Provider the reducers object that users is avaible at state.users



*/

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import RootReducers from './reducers';
import App from './components/app';

//import 'bootstrap/dist/css/bootstrap.css';

const storeObject  = createStore(RootReducers);



ReactDOM.render(
    <Provider store={storeObject}><App /></Provider>,
    document.getElementById('root')
);

/*const reducers = function(state, action){
  return "foo";
}
const store = createStore(reducers, 0);
store.subscribe(()=>{
  console.log("store changed", store.getState())
})

store.dispatch({type:"INC",payload: 1}) */
