import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.BAS_URL, 
    headers:{
        'Content-Type': 'application/json',
    }
})
export default axiosClient



axiosClient.interceptors.request.use( (config)=>{
    const token: string| null =localStorage.getItem('token');
    if(token && config.headers){
        config.headers['Authorization']=`Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

// Adding a response interceptor
axiosClient.interceptors.response.use((response) => {
    // Your response handling logic here
    return response;
  }, (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token refresh logic here
    }
    return Promise.reject(error);
  });