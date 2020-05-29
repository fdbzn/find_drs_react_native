
function doctors(state = {}, action) {
    switch(action.type) {
      case 'SET_HISTORY_DOCTORS': {
        return {...state, ...action.payload}
      }
      case 'SET_SELECTED_APPOINTMENT': {
        return {...state, ...action.payload}
      }
      default:
        return state
    }
  }
  
  export default doctors;
  