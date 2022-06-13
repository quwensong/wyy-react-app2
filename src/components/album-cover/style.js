import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  width: ${props => props.width + "px"};
  /* &:hover{
    border: 1px solid #d3d3d3;
  } */
  .album-image {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    

    img {
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
    .play {
      position: absolute;
      cursor: pointer;
      top:72px;
      left: 72px;
      display: inline-block;
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`