
import React, { memo } from 'react'

import {headerLinks} from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

const AppHeader = memo(() => {

  const showSelectItem = (item,index)=>{
    if(index<3){
      return (
        <NavLink  to={item.link} key={item.title}  >
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }else{
      return (
        <a href={item.link} key={item.title}>{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={item.title}>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined/>} placeholder="音乐/视频/电台/用户"/>
          <div className="center">
            创作者中心
          </div>
          <button className="login">
            登录
          </button>
        </HeaderRight>

        
      </div>
      <div className="split">

      </div>

    </HeaderWrapper>
  )
})

export default AppHeader