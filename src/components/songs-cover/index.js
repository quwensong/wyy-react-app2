import React, { memo } from 'react';

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from './style';

const SongsCover =  memo((props)=>{
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        {/* by {info.copywriter } */}
      </div>
    </SongsCoverWrapper>
  )
})

// id(pin):7480836936
// type(pin):0
// name(pin):"意气风发丨少年永远一往直前"
// copywriter(pin):null
// picUrl(pin):"https://p2.music.126.net/vj92PNCdWbgPW_oTB1-ybQ==/109951167535759746.jpg"
// canDislike(pin):false
// trackNumberUpdateTime(pin):1654880549602
// playCount(pin):137859
// trackCount(pin):29
// highQuality(pin):false
// alg(pin):"featured"

export default SongsCover;
