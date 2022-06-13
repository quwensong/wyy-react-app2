import * as actionTypes from "./constants";
import {initImmutableMap,setImmutableMap} from "@/utils/immutable";

const defaultState = initImmutableMap({
  topBanners:[],
  hotRecommends:[],
  newAlbums:[],

  newSongs:{},
  hotSongs:{},
  originalSongs:{}
})

function reducer(state = defaultState,action) {
  // console.log(action)
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return setImmutableMap(state,'topBanners',action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return setImmutableMap(state,'hotRecommends',action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
     return setImmutableMap(state,'newAlbums',action.newAlbums)
    case actionTypes.CHANGE_NEW_SONGS:
      return setImmutableMap(state,'newSongs',action.newSongs)
    case actionTypes.CHANGE_HOT_SONGS:
      return setImmutableMap(state,'hotSongs',action.hotSongs)
    case actionTypes.CHANGE_ORIGINAL_SONGS:
      return setImmutableMap(state,'originalSongs',action.originalSongs)
    default:
      return state;
  }
}

export default reducer;