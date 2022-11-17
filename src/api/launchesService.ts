import apiClient from './apiClient';

export type ProductProps = {
  page:number,
  query:any
}

const launchesService = {
  getList: ({page, query}:ProductProps) =>  apiClient.post(`launches/query`, {
    query,
    options:{
      page:page,
      populate:['launchpad', 'links', 'rocket'],
      sort:{
        date_utc:-1,
      }
    }
  }),

};

export default launchesService;
