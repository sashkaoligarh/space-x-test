import apiClient from './apiClient';

const rocketService = {
  getList:  (page?:any) =>  apiClient.get(`rockets`,
  //  {
  //   options:{
  //     page:page,
  //     // populate:['launchpad', 'links', 'rocket'],
  //     sort:{
  //       date_utc:-1
  //    }
  //   }
  // }
  ),

};

export default rocketService;
