import request from '@/utils/request'

export function evaluation (data) {
  return request({
    url: '/evaluation',
    method: 'get',
    data: data
  })
}