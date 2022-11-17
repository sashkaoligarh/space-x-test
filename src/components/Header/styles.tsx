import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  justify-content: space-between;
`
export const RightWrappper = styled.div`
  display: flex;
  width: 70%;
`
export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Select = styled.select`
  border: 0;
  background-color: #000;
  width: 150px;
  margin: 10px;
  color:#FFF;
  :focus-visible {
    outline: none;
  }
  &:hover{
    cursor: pointer;
  }
`

export const MainTitle = styled.h1`
  font-size: 34;
`