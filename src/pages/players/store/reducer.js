import * as actionTypes from "./constants";
import {initImmutableMap,setImmutableMap} from "@/utils/immutable";

const defaultState = initImmutableMap({
  currentSong:{}

})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_SONG_DETAIL:
      return setImmutableMap(state,'currentSong',action.currentSong)
    default:
      return state
  }
}

export default reducer;