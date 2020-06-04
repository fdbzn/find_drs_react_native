
function notifications(state = {}, action) {
    switch(action.type) {
      case 'SET_NOTIFICATIONS': {
        return {...state, ...action.payload}
      }
      
      default:
        return state
    }
  }
  
  export default notifications;
  