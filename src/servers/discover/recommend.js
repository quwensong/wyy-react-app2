import $http from '@/servers/request'


// 热播轮播图
export function getTopBanners() {
  return $http({
    url: "/banner",
    method: "get"
  })
}

export function getHotRecommends(params) {
  return $http({
    url: "/personalized",
    method: "get",
    params
  })
}
// 新碟上架
/**
 * 
 * @param {number} limit  取出数量 , 默认为 50
 * @param {number} offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @param {string} area   ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * @param {string} type   new:全部 hot:热门,默认为 new
 * @param {number} year   年,默认本年
 * @param {number} month  月,默认本月
 * @returns {Promise}
 */
export function getNewAlbum(params) {
  return $http({
    url: "/top/album",
    method: "get",
    params
  })
}

export function getTopList(params) {
  return $http({
    url: "/top/list",
    params
  })
}


// offset=0&limit=30&year=2019&month=6




// export function getMapData(params) {
//   return $http({
//     url: '/getMapData',
//     method: 'post',
//     params
//   })
// }
// export function getWeather(params) {
//   return $http({
//     url: 'http://wthrcdn.etouch.cn/weather_mini?city=%E6%9D%AD%E5%B7%9E%E5%B8%82',
//     method: 'get',
//     params
//   })
// }
