import apiClient from './apiClient';

const launchpadService = {
  getList:  () =>  apiClient.get(`launchpads`)
  .then((res:any) => res.data.map((item:any) => {
    return {
      name:item.name,
      id:item.id,
    }
  }))
};

export default launchpadService;
