/*

The real reducers not only memory for the user data
*/
export default function(state=null,action){
switch (action.type) {
  case "USER_SELECTED":
        return action.payload
        break;
  case "GET_DATA":
        return action.promise
        break;



break;
}

return state;


}
