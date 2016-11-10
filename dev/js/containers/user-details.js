import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component
{
render() {
  if(!this.props.activeUserDetails)
  {
    return(<h2> Select a User...</h2>);

  }

  else  {
    return (
      <div>
      <img src={this.props.activeUserDetails.thumbnail} />
      <h2> {this.props.activeUserDetails.first} {this.props.activeUserDetails.last} </h2>
      <h3>Age: {this.props.activeUserDetails.age}</h3>
      <h3>Decription: {this.props.activeUserDetails.description}</h3>
      </div>
    );
  }


}


}

function mapStateToProps(state)
{
return {
  activeUserDetails: state.activeUser
}


}

export default connect(mapStateToProps)(UserDetails);
