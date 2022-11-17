import React, { FC, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LaunchItem, useLaunches } from '../../context/launch.context';
import { LaunchCard, InfoDialog } from './components';
import {Container, LaunchesWrapper, NoDataContainer} from './styles'

const Home:FC = () => {
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const {
    launches,
    launchData,
    fetchData,
    loading,
  } = useLaunches()
  if(launches.length === 0) return <NoDataContainer><h1>No launches found</h1></NoDataContainer>
  return ( 
    <Container>
      <InfiniteScroll
        dataLength={launchData.page * launchData.limit}
        next={fetchData}
        hasMore={launchData.hasNextPage}
        loader={<h4>Loading...</h4>}
      >
      <LaunchesWrapper>
        {loading ? <div>Loading</div> :
          launches.map((item:LaunchItem) => (
            <LaunchCard setIsOpenInfo={setIsOpenInfo} key={item.id} item={item}/>
          ))
        }
      </LaunchesWrapper>
    </InfiniteScroll>
    <InfoDialog 
      isOpenInfo={isOpenInfo}
      setIsOpenInfo={setIsOpenInfo}
    />
  </Container>
  );
}
 
export default Home;