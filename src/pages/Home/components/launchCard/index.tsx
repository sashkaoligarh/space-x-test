import React, { FC, useEffect, useState } from 'react';
import {Card, CardImage, IconWrapper, YoutubeIconWrapper} from './styles'
import { timeConverter } from '../../../../functions';
import { useLaunches } from '../../../../context/launch.context';
import { youtubeService } from '../../../../api';

import YoutubeIcon from './youtube-icon.png'
import ReservedImg from './NoImg.jpg'

type LaunchCardProps = {
  item:any,
  setIsOpenInfo:(status:boolean) => void,
}

const LaunchCard:FC<LaunchCardProps> = ({item, setIsOpenInfo}) => {
  const [preview, setPreview] = useState()

  const {
    setSelectedItem
  } = useLaunches()
  
  useEffect(() => {
    if(item.videoUrl){
      youtubeService.getVideoData(item.videoId)
      .then(res => {
        setPreview(res.maxres.url ||res.high.url)
      })
      .catch(e => {
        console.log('error',e.message);
      })
    }
  }, [])
  const handleClick = () => {
    setSelectedItem(item)
    setIsOpenInfo(true)
  }

  return (
    <Card onClick={handleClick} key={item.id}>
      <IconWrapper>
        {item.videoUrl ? 
          <YoutubeIconWrapper src={YoutubeIcon} />
        :
          null 
        }
       <CardImage
        title={item.name}
        alt={item.name}
        src={preview || item.iamge || ReservedImg}
      /> 
      </IconWrapper>
      {item.name} &nbsp;
      {timeConverter(item.date)}
    </Card>
  );
}
 
export default LaunchCard;