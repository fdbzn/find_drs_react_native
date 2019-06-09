import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import user from './user';
import homeSearch from './homeSearch';
import appointment from './appointment';

const reducer = combineReducers({  
  navigation,
  user,
  homeSearch,
  appointment,
})

export default reducer;
