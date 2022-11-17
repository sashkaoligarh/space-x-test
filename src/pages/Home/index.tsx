import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLaunches } from '../../context/launch.context';
import { LaunchCard, InfoDialog } from './components';
import {Container, LaunchesWrapper} from './styles'
const Home = () => {
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const {
    launches,
    launchData,
    fetchData,
    loading,
  } = useLaunches()
  
  return ( 
    <Container>
      <InfiniteScroll
        dataLength={launchData.page * launchData.limit}
        next={fetchData}
        hasMore={launchData.hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          launches.length > 0 ?
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          :
            null
        }
      >
      <LaunchesWrapper>
        {loading ? <div>Loading</div> :
          launches.length > 0 ?
            launches.map((item:any) => (
              <LaunchCard setIsOpenInfo={setIsOpenInfo} key={item.id} item={item}/>
            ))
          :
            <h3>No data</h3>
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