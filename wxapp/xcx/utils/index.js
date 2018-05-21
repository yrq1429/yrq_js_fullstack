
import * as Mock from './mock'

Mock["list"]
// 以防opt没有传该传的
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json'
}
let util = {
    request(opt) {
        // 生成对象  {}基础的  opt放到{}里
        let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt);
        let {url,data,header,method,dataType,mock=false} = options;
        // console.log(url, data, header, method, dataType, mock);
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                resolve(res.data);
                return
            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res) {
                    resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
            })
        })
    }
}

export default util