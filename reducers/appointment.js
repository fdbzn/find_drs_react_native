
function appointment(state = {}, action) {
    switch(action.type) {
      case 'SET_EDIT_RELATIVE': {
        return {...state, ...action.payload}
      }
      case 'SET_REMOVE_RELATIVE': {
        return {...state, ...action.payload}
      }
      case 'SET_RELATIVES': {
        return {...state, ...action.payload}
      }
      case 'SET_SCHEDULE': {
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
      case 'APPOINTMENT_CLEAR': {
        return false
      }
     
      default:
        return state
    }
  }
  
  export default appointment;
  