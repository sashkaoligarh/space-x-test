import * as React from 'react';
import { useLaunches } from '../../context/launch.context';
import {Select, Container, FilterWrapper, RightWrappper, MainTitle} from './styles'

const Header = () => {
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
            <div>Rocket:</div>
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
            <div>Status:</div>
            <Select
              value={status}
              onChange={(e:any) => onStatusSelect(e.target.value)}
            >
              <option value={'All types'}>All</option>
              <option value={'past'}>past</option>
              <option value={'upcoming'}>upcoming</option>
            </Select>
          </FilterWrapper>
          <FilterWrapper>
            <div>Launchpad:</div>
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