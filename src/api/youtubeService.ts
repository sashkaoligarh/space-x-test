import axios from 'axios'

const youtubeService = {
  getVideoData: (id:string) => axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBXyZDkE3Q7VnVh5AXi8CSzszuSTVlqjy4`)
}

export default youtubeService