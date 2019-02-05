import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import user from './user';
import homeSearch from './homeSearch';

const reducer = combineReducers({  
  navigation,
  user,
  homeSearch,
})

export default reducer;
