import $http from '@/servers/request'

export function getSongDetail(params) {
  return $http({
    url: '/song/detail',
    method: 'get',
    params
  })
}