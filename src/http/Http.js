import axios from 'axios'
export const httpRequest = async ({url, method, data})=>{
    const requset = await axios({
         url : 'http://localhost:4000/' + url,
        // url : 'http://localhost:4000/' + url,
        method,
        data : data
    })

    return requset['data']
}