import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
import UserData from '../containers/user-data';
//import UserList from '../containers/user-list';
import 'bootstrap/dist/css/bootstrap.css';
require('../../scss/style.scss');


const App = () =>
(
  <div> <h2> Username List:</h2>
  <UserList />

  <hr/>
  <UserDetails />

 <UserData />

  </div>
);

export default App;
