import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  &:hover{
    cursor: pointer;
  }
`
export const CardImage = styled.img`
  width: 300px;
  min-height: 300px;
  margin-bottom: 24px;
  background-color: #000;
  object-fit: fill;
`
export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const YoutubeIconWrapper = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
`