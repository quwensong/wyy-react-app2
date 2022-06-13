import React, { memo,useCallback,useEffect,useRef,useState} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import { getTopBannersAction} from '../../store/actionCreators';
import { getInImmutableMap } from '@/utils/immutable';

import { Carousel } from 'antd';
import { 
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

const TopBanner = memo(() => {
  // state
  const [current,setCurrent] = useState(0)

  // redux相关
  const dispatch = useDispatch()
  const {topBanners} = useSelector(state=>({
    topBanners:getInImmutableMap(state,['recommend','topBanners'])
  }),shallowEqual)
  
  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bannerChange = useCallback((from,to)=>{
    setCurrent(to)
  },[])

  // 其他业务逻辑
  const bgImg = topBanners[current]?.imageUrl + '?imageView&blur=40x20'

  return (
    // 
    <TopBannerWrapper bgImage={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel 
            ref={bannerRef}
            effect="fade"
            autoplay
            beforeChange={bannerChange}>
              {
                topBanners.map(item=>{
                    return (
                      <div className="banner-item" key={item.targetId}>
                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                      </div>
                    )
                  }
                )
              }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>

    </TopBannerWrapper>
  )
})

export default TopBanner