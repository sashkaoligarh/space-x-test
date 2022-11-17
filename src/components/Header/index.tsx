import * as React from 'react';
import { useLaunches } from '../../context/launch.context';
import {
  Select,
  Container,
  FilterWrapper,
  RightWrappper,
  MainTitle,
  FilterTitle
} from './styles'

const Header:React.FC = () => {
  const {
    rockets,
    onRocketSelect,
    rocketId,
    launchpads,
    onLaunchpadSelect,
    onStatusSelect,
    launchpadId,
    status,
  } = useLaunches()

  if(rockets?.length === 0 || launchpads?.length === 0) return <></>
  return ( 
    <Container>
      <MainTitle>SPACEX LAUNCHES</MainTitle>
      <RightWrappper>
        <FilterWrapper>
          <FilterTitle>Rocket:</FilterTitle>
          <Select
            value={rocketId}
            onChange={(e:any) => onRocketSelect(e.target.value)}>
            <option value={'All types'}>All rockets</option>
            {rockets.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Status:</FilterTitle>
          <Select
            value={status}
            onChange={(e:any) => onStatusSelect(e.target.value)}
          >
            <option value={'All types'}>All</option>
            <option value={'past'}>Past</option>
            <option value={'upcoming'}>Upcoming</option>
          </Select>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Launchpad:</FilterTitle>
          <Select
            value={launchpadId}
            onChange={(e:any) => onLaunchpadSelect(e.target.value)}
          >
            <option value={'All types'}>All</option>
            {launchpads.map((item:any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Select>
        </FilterWrapper>
      </RightWrappper>
    </Container> 
  );
}
 
export default Header;