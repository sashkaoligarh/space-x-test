import React, { FC, useEffect, useState } from 'react';
import {Card, CardImage} from './styles'

import { timeConverter } from '../../../../functions';
import { useLaunches } from '../../../../context/launch.context';
import { youtubeService } from '../../../../api';
type LaunchCardProps = {
  item:any,
  setIsOpenInfo:(status:boolean) => void,
}
const reserveImage = 'https://universemagazine.com/wp-content/uploads/2019/06/48052224858_d0261c665c_k.jpg'

const LaunchCard:FC<LaunchCardProps> = ({item, setIsOpenInfo}) => {
  const {
    setSelectedItem
  } = useLaunches()
  const [preview, setPreview] = useState()
  useEffect(() => {
    if(item.links.webcast){
      youtubeService.getVideoData(item.links.youtube_id)
      .then(res => {
        setPreview(res.data.items?.[0]?.snippet?.thumbnails?.maxres?.url ||res.data.items?.[0].snippet?.thumbnails?.high?.url)
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
      <CardImage title={item.name} alt={item.name} src={preview || item.links.patch.large || reserveImage}/>
      {item.name}
      {timeConverter(item.date_unix)}
    </Card>
  );
}
 
export default LaunchCard;