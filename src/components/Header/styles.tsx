import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

`
export const RightWrappper = styled.div`
  display: flex;
  margin-left: 120px;
  flex-wrap: wrap;
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
export const FilterTitle = styled.h3`
  font-weight: bold;
`

export const MainTitle = styled.h1`
  font-size: 34;
`