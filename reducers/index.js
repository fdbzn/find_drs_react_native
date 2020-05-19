import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import user from './user';
import homeSearch from './homeSearch';
import appointment from './appointment';
import doctors from './doctors';

const reducer = combineReducers({  
  navigation,
  user,
  homeSearch,
  appointment,
  doctors,
})

export default reducer;
