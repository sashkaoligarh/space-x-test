import apiClient from './apiClient';

export type ProductProps = {
  page:number,
  query:QueryType
}
type QueryType = {
  launchpad:string,
  rocket:string,
  upcoming:boolean
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
  })
  .then((res:any) => {
    return {
      docs:res.data.docs.map((item:any) => {
        return {
          videoUrl:item.links.webcast,
          videoId:item.links.youtube_id,
          id:item.id,
          name:item.name,
          image:item.links.patch.large,
          date:item.date_unix,
          details: item.details,
          rocketName:item.rocket.name
        }
      }),
      paginationData:{
        hasNextPage:res.data.hasNextPage,
        page:res.data.page,
        limit:res.data.limit,
        nextPage:res.data.nextPage,
      }
    }
  })
  ,

};

export default launchesService;
