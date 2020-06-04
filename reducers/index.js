import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import user from './user';
import homeSearch from './homeSearch';
import appointment from './appointment';
import doctors from './doctors';
import notifications from './notifications';

const reducer = combineReducers({  
  navigation,
  user,
  homeSearch,
  appointment,
  doctors,
  notifications,
})

export default reducer;
