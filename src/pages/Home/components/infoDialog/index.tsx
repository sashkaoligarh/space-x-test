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
type DialogProps = {
  isOpenInfo:boolean,
  setIsOpenInfo:(status:boolean) => void,
  item?:any
}
const noVideoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtZYmZDYW9tG9H4O5j_YuEnbAcZvGNynY5xH0vTu_qPJOshGuU5WDTThs2ABx8CC1-oE&usqp=CAU'
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
            <CloseButton onClick={handleCloseButton}>X</CloseButton>
        </div>
        {selectedItem?.links.webcast ?

          <ReactPlayer
            controls={true}
            playing={playing}
            onPlay={() => setPlaying(true)}
            url={selectedItem?.links.webcast}
            width={'100%'}
            height={'100%'}
          />
        :
          <CardImage title="no-video" src={noVideoUrl}/>
        }
        <h4>{timeConverter(selectedItem?.date_unix)}</h4>
        <h3>{selectedItem?.rocket.name}</h3>
        <h2>{selectedItem?.name}</h2>
        <p>{selectedItem?.details}</p>

        <p>{selectedItem?.details}</p>
      </BodyDialog>
    </StyledDialog>);
}
 
export default InfoDialog;