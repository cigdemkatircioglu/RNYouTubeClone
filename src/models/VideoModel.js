class Video{
  constructor(title,publishedAt,videoThumbnail,videoDuration,channelTitle,videoId,videoHeader){
    this.videoTitle=title.split('').slice(0, 40).join('')+'...'
    this.videoPublishedDate=publishedAt.split('').slice(11,16).join(''),
    this.videoThumbnail=`${videoThumbnail}`,
    this.videoDuration=videoDuration,
    this.channelTitle=channelTitle,
    this.videoId=videoId,
    this.videoHeader=videoHeader
  }
}
export default Video;
