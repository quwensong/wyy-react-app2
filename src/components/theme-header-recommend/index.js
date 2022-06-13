import React, { memo } from 'react'
import  PropTypes  from 'prop-types'

import {
  HeaderWrapper
} from './style'

const RemThemeHeader = memo((props) => {
  const { title,keywords } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((keyword,index) =>{
              return (
                <div className="item" key={keyword}>
                  <a href="todo">{keyword}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
// 设置props类型
RemThemeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired
}
RemThemeHeader.defaultProps = {
  title: '',
  keywords: []
}

export default RemThemeHeader