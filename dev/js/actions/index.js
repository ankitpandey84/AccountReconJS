/*
actions for the c

*/

import request from 'axios';

export const selectUser = (userDetails) => {
console.log("You clicked on user :", userDetails.first);
return {
type: "USER_SELECTED",
payload: userDetails

}
};



export const accountData = () => {
  console.log("making an api call");
   return {
     type: "GET_DATA",
     promise: request.get("http://10.0.1.131:8082/AccountBackup/accountfetch")
   }




};
