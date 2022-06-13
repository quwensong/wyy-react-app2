import React, { memo,useState,useEffect,useRef,useCallback } from 'react'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getSongDetailAction } from '../store/actionCreators'
import {getInImmutableMap} from '@/utils/immutable'
import { getSizeImage,formatMinuteSecond,getPlaySong} from '@/utils/format-utils'
import { DEFAULT_ALBUM_PICURL } from '@/common/constants'

import { Slider } from 'antd'
import {
  AppPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator} from './style'

const AppPlayerBar = memo(() => {
  // props state
  const [currentTime,setCurrentTime] = useState(0);
  const [progress,setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch()
  const {currentSong} = useSelector(state => ({
    currentSong:getInImmutableMap(state,[ 'player' ,'currentSong']) 
  }),shallowEqual)

  const playRef = useRef()

  useEffect(() => {
   dispatch(getSongDetailAction({ids:167876})) 
  },[dispatch])

  useEffect(() => {
    playRef.current.src = getPlaySong(currentSong.id);
    playRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
    setDuration(currentSong.dt);
  }, [currentSong]);

  // 其他处理
  const picUrl = (currentSong.al && currentSong.al.picUrl) || DEFAULT_ALBUM_PICURL
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  // const duration = currentSong.dt || 0;
  const durationTime = formatMinuteSecond(currentSong.dt,'mm:ss') || '00:00'
  const showCurrentTime = formatMinuteSecond(currentTime,'mm:ss') || '00:00'
  // progress = currentTime / currentSong.dt * 100 || 0
  // 处理函数
  const playMusic = useCallback(()=>{
    // playRef.current.src = getPlaySong(currentSong.id)
    // playRef.current.currentTime = currentTime / 1000;
    isPlaying ? playRef.current.pause() : playRef.current.play()
    setIsPlaying(!isPlaying)
  },[isPlaying])
  const timeUpdate = (e)=>{
    if(!isChanging){
      setCurrentTime(e.target.currentTime*1000)
      setProgress(currentTime / duration * 100)
    }
  }
  const sliderChange = useCallback((value)=>{
    setIsChanging(true);
    
    const currentTime = value / 100 * duration;
    console.log(currentTime)
    setCurrentTime(currentTime);
    setProgress(value);
  },[duration])
  const sliderAfterChange = useCallback((value)=>{
    if(!isPlaying){
      playMusic();
    }
    const currenttime = value / 100 * duration / 1000;
    playRef.current.currentTime = currenttime;
    setCurrentTime(currenttime * 1000);
    setIsChanging(false);
  },[playMusic,isPlaying,duration])

  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e=>playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider 
                defaultValue={0}
                value={progress}
                tooltipVisible={false}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{durationTime}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator >
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={playRef} onTimeUpdate={timeUpdate}/>
    </AppPlayerBarWrapper>
  )
})

export default AppPlayerBar

