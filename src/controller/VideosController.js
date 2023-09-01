import Video from '../models/VideoModel';
import axios from 'axios';

class VideosController {
  static async getVideos() {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
          params: {
            key: 'AIzaSyCpSrjqC6_1aPSxCIY6Hni6iBDVi7rDD9A',
            part: 'snippet',
            chart: 'mostPopular',
            maxResult: 10,
          },
        },
      );

      //console.log(response.data.items)
      const videos = response?.data?.items?.map(
        video => new Video(
          video.snippet.title,
          video.snippet.publishedAt,
          video.snippet.thumbnails.standard.url,
          '6:25',
          video.snippet.channelTitle,
          video.id,
          video.snippet.title
          ),
      );
      return videos;
    } catch (error) {
      console.log(error, 'ww');
    }
  }
}
export default VideosController;
