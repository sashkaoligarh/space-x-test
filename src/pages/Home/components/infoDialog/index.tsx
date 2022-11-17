import React, { FC, useState } from 'react';
import { useLaunches } from '../../../../context/launch.context';
import {
  StyledDialog,
  BodyDialog,
  CloseButton,
  CardImage
} from './styles'
import ReactPlayer from 'react-player'
import { timeConverter } from '../../../../functions';
import NoVideo from './noVideo.svg'

type DialogProps = {
  isOpenInfo:boolean,
  setIsOpenInfo:(status:boolean) => void,
  item?:any
}


const InfoDialog:FC<DialogProps> = ({ isOpenInfo, setIsOpenInfo, item }) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const {selectedItem} = useLaunches()
  const handleCloseButton = () => {
    setIsOpenInfo(false)
    setPlaying(false)
  }
  return (
    <StyledDialog open={isOpenInfo}>
      <BodyDialog>
        <div style={{ display: "flex", justifyContent:'flex-end' }}>
            <CloseButton onClick={handleCloseButton}>x</CloseButton>
        </div>
        {selectedItem?.videoUrl ?

          <ReactPlayer
            controls={true}
            playing={playing}
            onPlay={() => setPlaying(true)}
            url={selectedItem?.videoUrl}
            width={'100%'}
            height={'calc(100vh - 150px)'}
          />
        :
          <CardImage title="no-video" src={NoVideo}/>
        }
        <h4>{timeConverter(selectedItem?.date)}</h4>
        <h3>{selectedItem?.rocketName}</h3>
        <h2>{selectedItem?.name}</h2>
        <p>{selectedItem?.details}</p>

        <p>{selectedItem?.details}</p>
      </BodyDialog>
    </StyledDialog>);
}
 
export default InfoDialog;