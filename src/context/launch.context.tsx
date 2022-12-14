import React, { createContext, useState, useEffect } from 'react';
import { launchesService, rocketService, launchpadService } from '../api';
import { useQueryParam, StringParam } from 'use-query-params';

interface LaunchesContextInterface {
  launches:LaunchItem[];
  launchData:LaunchPaginationType;
  fetchData:(() => void);
  rockets:any[];
  onRocketSelect:(value:string) => void;
  rocketId:string;
  launchpads:any[]
  onStatusSelect:(value:string) => void;
  onLaunchpadSelect:(value:string) => void;
  launchpadId:string;
  status:string;
  loading:boolean;
  selectedItem:LaunchItem
  setSelectedItem:(item:LaunchItem) => void;
}
export type LaunchItem = {
  videoUrl:string,
  videoId:string,
  id:string,
  name:string,
  image:string,
  date:number,
  details:string,
  rocketName:string
}
export type LaunchPaginationType = {
  hasNextPage:boolean,
  page:number,
  limit:number,
  nextPage:number,
}
const LaunchesContext = createContext<Partial<LaunchesContextInterface>>({});

const LaunchesProvider = (props:any) => {
  const [launches, setLaunches] = useState<any>([])
  const [launchData, setLaunchData] = useState<any>()
  const [rockets, setRockets] = useState<any>([])
  const [launchpads, setLaunchpads] = useState<any>([])
  const [selectedItem, setSelectedItem] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  const [rocketId, setRocketId] = useQueryParam('rocketId', StringParam);
  const [launchpadId, setLaunchpadId] = useQueryParam('launchpadId', StringParam);
  const [status, setStatus] = useQueryParam('status', StringParam);

  useEffect(() => {
    launchpadService.getList()
    .then((res) => {
      setLaunchpads(res)
    })
    .catch((e) => console.log('err', e))
    rocketService.getList()
    .then((res) => {
      setRockets(res)
    })
    .catch((e) => console.log('err', e))
  },[])

  useEffect(() => {
    const query:any = {
      launchpad:launchpadId,
      rocket:rocketId,
    }
    if(status){
      query.upcoming = status === 'upcoming' ? true : false
    }
    setLoading(true)
    launchesService.getList({
    page: 1, 
    query})
    .then((res) => {
      setLaunches(res.docs)
      setLaunchData(res.paginationData)
      setLoading(false)
    })
    .catch((err) => {
      console.log('err', err);
    })
  },[rocketId, launchpadId, status])

  const fetchData = () => {
    const query:any = {
      launchpad:launchpadId,
      rocket:rocketId,
    }
    if(status){
      query.upcoming = status === 'upcoming' ? true : false
    }
    launchesService.getList({
      page:launchData?.nextPage || 1, 
      query})
    .then((res) => {
      setLaunches((old:any) => {
        return [...old, ...res.docs]
      })
      setLaunchData(res.paginationData)
    })
    .catch((err) => {
      console.log('err', err);
    })
  }
  const onRocketSelect = (option:string) => {
    if (option === 'All types') {
      setRocketId(undefined);
      return;
    } else {
      setRocketId(option)
    }
  }

  const onStatusSelect = (option:string) => {
    if (option === 'All types') {
      setStatus(undefined);
      return;
    } else {
      setStatus(option)
    }
  }

  const onLaunchpadSelect = (option:string) => {
    if (option === 'All types') {
      setLaunchpadId(undefined);
      return;
    } else {
      setLaunchpadId(option)
    }
  }


  return (
    <LaunchesContext.Provider
      value={{
        launches,
        launchData,
        fetchData,
        rockets,
        onRocketSelect,
        rocketId,
        launchpads,
        onLaunchpadSelect,
        onStatusSelect,
        launchpadId,
        status,
        loading,
        selectedItem,
        setSelectedItem,
      }}
      {...props}
    />
  );
};

const useLaunches = () => {
  const context = React.useContext(LaunchesContext);
  if (context === undefined) {
    throw new Error('useLaunches must be used within a LaunchesProvider');
  }
  return context as LaunchesContextInterface;
};

export { LaunchesProvider, useLaunches };