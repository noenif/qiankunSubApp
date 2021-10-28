import axios from 'axios'
import config from './config'
import message from 'ant-design-vue/es/message'
import store from '../store/index'
import Qs from "qs"

const { apiHost } = config

const option = {
  baseURL: apiHost,
  timeout: 20000, // 请求超时时间
}

// 创建 axios 实例
const service = axios.create(option)
service.interceptors.request.use(
  config => {
    config.headers.Authorization = store.state.token === '' ? 'Bearer 0103e474fa694ad39389388ebec68019' : 'Bearer ' + store.state.token
    //只针对get方式进行序列化
    if (config.method === 'get') {
      config.paramsSerializer = function (params) {
        return Qs.stringify(params, { arrayFormat: 'indices' })
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    // 判断处理结果是文件类型时，不对结果集处理，直接返回
    if (res instanceof Blob) {
      return response
    }
    // 这里需要根据不同的项目后端接口封装情况做适当调整
    if (res.isError) {
      message.error((res && res.message) || '未知异常！')
      return Promise.reject(new Error((res && res.message) || '未知异常！'))
    } else {
      return res;
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled')
      return null
    }
    return Promise.reject(error)
  }
)


export default service
