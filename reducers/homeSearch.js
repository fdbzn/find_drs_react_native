
function homeSearch(state = {}, action) {
  switch(action.type) {
    case 'SET_NAME_DOCTOR': {
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_ADDRESS': {
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_SPECIALTY': {
      return {...state, ...action.payload}
    }
    case 'SET_LIST_SPECIALTIES': {
      return {...state, ...action.payload}
    }
    case 'SET_DOCTOR_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_FILTER_OPTIONS': {
      return {...state, ...action.payload}
    }
    case 'SET_TYPE_SEARCH': {
      return {...state, ...action.payload}
    }
    case 'LOAD_MORE': {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default homeSearch;
