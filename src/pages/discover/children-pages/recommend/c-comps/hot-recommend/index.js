import React, { memo,useEffect} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

import RemThemeHeader from '@/components/theme-header-recommend';
import SongsCover from '@/components/songs-cover';
import { HotRecommendWrapper } from './style'
import { getHotRecommendsAction } from '../../store/actionCreators';
import { getInImmutableMap } from '@/utils/immutable';


const HotRecommend = memo(() => {
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(state=>({
    hotRecommends:getInImmutableMap(state,['recommend','hotRecommends'])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }
  , [dispatch])


  return (
    <HotRecommendWrapper>
      <RemThemeHeader title="热门推荐" keywords={['华语','流行','民谣','摇滚','电子']}></RemThemeHeader>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index)=>{
            return (
              <SongsCover info={item}  key={item.id}></SongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})


export default HotRecommend