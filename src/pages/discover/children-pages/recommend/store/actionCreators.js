import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList
} from '@/servers/discover/recommend';

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})
const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:res.result
})
const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums:res.albums
})
// 0新歌榜、1热歌榜、2原创榜
const changeNewSongAction = (res) => ({
  type: actionTypes.CHANGE_NEW_SONGS,
  newSongs:res.playlist
})
const changeHotSongsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_SONGS,
  hotSongs:res.playlist
})
const changeOriginalSongsAction = (res) => ({
  type: actionTypes.CHANGE_ORIGINAL_SONGS,
  originalSongs:res.playlist
})



export const getTopBannersAction = () => {
  return async dispatch =>{
    try {
      const res = await getTopBanners();
      dispatch(changeTopBannersAction(res))
    }catch(e) {
      console.log("🚀 ~ file: actionCreators.js ~ line 1", e)
    }

  }
}

export const getHotRecommendsAction = (limit) => {
  return async dispatch =>{
    try {
      const res = await getHotRecommends({limit});
      // console.log("🚀 ~ file: actionCreators.js ~ line 34 ~ getHotRecommendsAction ~ res", res)
      dispatch(changeHotRecommendsAction(res))
    }catch(e) {
      console.log("🚀 ~ file: actionCreators.js ~ line 1", e)
    }

  }
}

export const getNewAlbumsAction = (params={}) => {
  return async dispatch =>{
    try {
      const res = await getNewAlbum(params);
      dispatch(changeNewAlbumsAction(res))
    }catch(e) {
      console.log("🚀 ~ file: actionCreators.js ~ line 1", e)
    }
  }
}



export const getTopListAction = (params={}) => {
  return async dispatch =>{
    try {
      const res = await getTopList(params);
      switch(params.idx) {
        case 0:
          dispatch(changeNewSongAction(res))
          
          break;
        case 1:
          dispatch(changeHotSongsAction(res))
          break;
        case 2:
          dispatch(changeOriginalSongsAction(res))
          break;
        default:
          break;
      }
    }catch(e) {
      console.log("🚀 ~ file: actionCreators.js ~ line 1", e)
    }
  }
}