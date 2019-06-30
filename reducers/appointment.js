
function appointment(state = {}, action) {
    switch(action.type) {
      case 'SET_DR_PROFILE': {
        return {...state, ...action.payload}
      }
      case 'SET_USER_PATIENT': {
        return {...state, ...action.payload}
      }
      case 'SET_PAY_METHOD': {
        return {...state, ...action.payload}
      }
      case 'SET_INTERVALS': {
        return {...state, ...action.payload}
      }
     
      default:
        return state
    }
  }
  
  export default appointment;
  