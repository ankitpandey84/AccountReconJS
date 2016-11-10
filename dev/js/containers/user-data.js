/*
This is the containers here the mapStateToProps is very important that is the glue
between container and reducers objects. Such as at mapStateToProps state.user the variable
user in this context has to match with reducers object. It can be assigned to any
variables. That varible such as for below code we have usersPropsObject which has a copy of
state.users object can be used at the component with this.props.variable
Map function is used when there is and array of details. IF there is and jason
data or similar data structure. The parameters that is passed to map function
is used to fetch the details of the array.
*/

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountData} from '../actions/index';

import { Button, ButtonGroup,ButtonToolbar,Checkbox} from 'react-bootstrap';

//console.log(accountData);

class UserData extends Component{
createListItems()
{

    return (
      <ButtonGroup  >
      
      <Button bsStyle="primary"></Button>
      <Button  bsStyle="success"></Button>
      </ButtonGroup>
    );

}

render ()
{
return (
   <ButtonToolbar  >
  {this.createListItems()}
   </ButtonToolbar>
);
}
}
function mapStateToProps(state)
{
  return {
    usersPropsObject: state.activeUser
  };

}


function matchDispatchToProps(dispatch){
  return bindActionCreators({accountData:accountData},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserData);
