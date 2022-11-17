import styled from 'styled-components'

export const StyledDialog = styled.dialog`
  position: fixed;
  width: 90%;
  border-radius: 10px;
  z-index: 5;
  padding: 20px;
  top:2%;
  overflow: auto;
  min-height: 90%;
  border: none;
  box-shadow:15px 15px 250px 15px rgba(255, 255, 255, 0.25);
  background-color:#000;
`;

export const BodyDialog = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  color:#fff;
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.div`
  color:#FFF;
  &:hover{
    cursor: pointer;
  }
`
export const CardImage = styled.img`
  width: 300px;
  min-height: 300px;
`