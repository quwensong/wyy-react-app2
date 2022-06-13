import React, { memo } from 'react'

// swiper@6.8.4
import { Swiper, SwiperSlide } from 'swiper/react' // 引入js
import SwiperCore, { Autoplay,Pagination,Navigation,Scrollbar,A11y } from 'swiper/core' // 引入核心插件和自动播放组件
import 'swiper/swiper.min.css' // 引入样式
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

SwiperCore.use([Autoplay,Pagination,Navigation,Scrollbar,A11y]) // 使用插件，插件名放入[]中，这一行是重点

const SwiperComp = memo((props) => {
  const { topBanners } = props
  return (
    <Swiper
      style={{ width: '730px' }}
      speed={1000} // 修改为1000ms
      pagination={{
        clickable: true
      }}
      // scrollbar={{ draggable: true }}
      navigation
      // 在组件标签中进行配置，注意这里的autoplay都是小写的哦
      pauseOnMouseEnter
      autoplay
      loop
      
  >
    {
      topBanners.map((item,index)=>{
        return (
          <SwiperSlide>
            <img style={{ height: '100%',width:'100%'}}src={item.imageUrl} alt=""/>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  )
})


export default SwiperComp 