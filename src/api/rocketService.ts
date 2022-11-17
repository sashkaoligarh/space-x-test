import apiClient from './apiClient';

const rocketService = {
  getList:  () =>  apiClient.get(`rockets`)
  .then((res:any) => res.data.map((item:any) => {
    return {
      name:item.name,
      id:item.id,
    }
  })),
};

export default rocketService;
