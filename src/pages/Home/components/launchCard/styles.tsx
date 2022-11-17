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
`