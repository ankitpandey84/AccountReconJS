/*
Below is the code to combine all the reducers from the available stores and
create an object for the reducers.
For example here the import UserReducers is just defined in this file only,
its not defined in reducers-users file which is the current store. So, every thing that
is returned from the store is copied in the variable UserReducers. After that
below at combine reducers level, one object that is users is created for the entire store
this object will be used/returned  at container level(mapStateToProps) as it is and props
can be fetched from that users object at mapStateToProps the variable on the left can be any thing but at right hand side
is has to match the combine reducers object state.users combineReducers in this context is actually taking the array with data and creating
an object users
*/


import {combineReducers} from 'redux';
import UserReducers from './reducers-users';
import ActiveUserReducers from './reducers-active-users';


const rootReducers = combineReducers({
users: UserReducers,
activeUser: ActiveUserReducers

});

export default rootReducers;
