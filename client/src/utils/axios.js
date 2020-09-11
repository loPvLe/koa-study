import axios from 'axios'

// 请求拦截
axios.interceptors.request.use(
    (confing) => {

        return confing
    },
    (error) => {
        return Promise.reject(error)
    }
)

//响应拦截

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        // 获取状态码

        
        return Promise.reject(error)
    }
)
export default axios