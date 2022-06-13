import React, { memo, useEffect } from 'react';

import TopBanner from './c-comps/top-banner';
import HotRecommend from './c-comps/hot-recommend';
import NewAlbum from './c-comps/new-album';
import Ranking from './c-comps/ranking';
import UserLogin from './c-comps/user-login';
import SettleSinger from './c-comps/settle-singer';
import HotAnchor from './c-comps/hot-anchor';
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

const Recommend = (props) => {

  useEffect(() => {},[])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <Ranking></Ranking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSinger></SettleSinger>
          <HotAnchor></HotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
// const mapStateToProps = (state) => ({topBanners: state.recommend.topBanners}) 
// const mapDispatchToProps = (dispatch) => ({getBanners:()=>{dispatch(getTopBannersAction())}})
export default memo(Recommend);