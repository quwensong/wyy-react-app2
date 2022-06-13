import * as actionTypes from './constants';

import {
  getSongDetail
}from '@/servers/players';

export const changeSongDetailAction = (currentSong) => {
  console.log("333",currentSong);

  return {
    type: actionTypes.CHANGE_SONG_DETAIL,
    currentSong
  }
  
  
}


export const getSongDetailAction = (params)=>{
  return async dispatch =>{
    try {
      const res = await getSongDetail(params)
      dispatch(changeSongDetailAction(res.songs[0]  ))
    }catch(e){
    console.log("🚀 ~ file: actionCreators.js ~ line 19", e)
    }
  }
}
  