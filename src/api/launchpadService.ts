import apiClient from './apiClient';

const launchpadService = {
  getList:  () =>  apiClient.get(`launchpads`),
};

export default launchpadService;
