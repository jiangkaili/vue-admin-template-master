import request from '@/utils/request'

export default {
  // 根据课程id 获取章节和小节数据列表
  getAllChapterVideo(courseId) {
    return request({
      url: `/eduservice/chapter/getChapterVideo/${courseId}`,
      method: 'get'
    })
  }
}
