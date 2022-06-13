import React, { memo,useEffect,useRef} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

import { NEW_ALBUMS_LIMIT } from '@/common/constants';
import {getInImmutableMap} from '@/utils/immutable'

import { Carousel } from 'antd';
import AlbumCover from '@/components/album-cover';
import RemThemeHeader from '@/components/theme-header-recommend'
import { getNewAlbumsAction } from '../../store/actionCreators';
import { 
  NewAlbumWrapper
} from './style'


const NewAlbum = memo(() => {

  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state=>({
    newAlbums:getInImmutableMap(state,['recommend','newAlbums'])
  }),shallowEqual)


  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumsAction({
      limit:NEW_ALBUMS_LIMIT
    }))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <RemThemeHeader title="新碟上架"></RemThemeHeader>
      <div className="content">
        <button className="arrow arrow-left sprite_02" 
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <AlbumCover key={iten.id} 
                                             info={iten} 
                                             size={100} 
                                             width={118} 
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>

    </NewAlbumWrapper>
  )
})

export default NewAlbum