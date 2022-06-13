import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '@/pages/discover/children-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/players/store';

const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer
})

export default cReducer;