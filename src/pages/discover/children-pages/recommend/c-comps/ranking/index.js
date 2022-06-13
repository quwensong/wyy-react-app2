import React, { memo,useEffect} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import RemThemeHeader from '@/components/theme-header-recommend'
import TopRanking from '@/components/top-ranking';
import {RankingWrapper} from './style'

import {getTopListAction} from '../../store/actionCreators'
import { getInImmutableMap } from '@/utils/immutable';

const Ranking = memo(() => {

  // redux hooks
  const dispatch = useDispatch()
  const { newSongs, hotSongs, originalSongs } = useSelector(state => ({
    newSongs: getInImmutableMap(state,["recommend", "newSongs"]),
    hotSongs:  getInImmutableMap(state,["recommend", "hotSongs"]),
    originalSongs:  getInImmutableMap(state,["recommend", "originalSongs"]),
  }), shallowEqual);
  // console.log(newSongs, hotSongs, originalSongs)

  useEffect(() => {
    // 0新歌榜、1热歌榜、2原创榜
    [0,1,2].forEach(item=>dispatch(getTopListAction({idx:item})))
  }, [dispatch])

  return (
    <RankingWrapper>
      <RemThemeHeader title="榜单"/>
      <div className="tops">
          <TopRanking info={newSongs}></TopRanking>
          <TopRanking info={hotSongs}></TopRanking>
          <TopRanking info={originalSongs}></TopRanking>
        </div>
    </RankingWrapper>
  )
})

export default Ranking