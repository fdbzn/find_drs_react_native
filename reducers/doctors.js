
function doctors(state = {}, action) {
    switch(action.type) {
      case 'SET_HISTORY_DOCTORS': {
        return {...state, ...action.payload}
      }
      default:
        return state
    }
  }
  
  export default doctors;
  