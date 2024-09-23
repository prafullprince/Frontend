import axios from "axios";

// creating axios instance
export const axiosInstance = axios.create({});

// returning axiosInstance according to data
export const apiConnector = (method,url,bodyData,headers,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        // prev time i wrote bodyData instead of data due to which it not parse data b/w client and server
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null
    })
}
