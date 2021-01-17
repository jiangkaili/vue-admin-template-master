import request from '@/utils/request'
export default {
  //添加章节
  addVideo(video) {
    return request({
      url: '/eduservice/video/addVideo',
      method: 'post',
      data: video
    })
  },
  //根据id查询章节
  getVideo(videoId) {
    return request({
      url: `/eduservice/video/getVideoInfo/${videoId}`,
      method: 'get'
    })
  },
  //修改章节
  updateVideo(video) {
    return request({
      url: '/eduservice/video/updateVideo',
      method: 'post',
      data: video
    })
  },
  //删除章节
  deleteVideo(videoId) {
    return request({
      url: '/eduservice/video/'+videoId,
      method: 'delete'
    })
  },
}
