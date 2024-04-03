import axios from "axios";

// Create an axios instance
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
  maxBodyLength: Infinity,
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
type users = {
  username: string;
  password: string;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getToken = async () => {
  try {
    const token = await localStorage.getItem("token");
    return token;
  } catch (error) {
    return null;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
apiClient.interceptors.request.use(
  async (config) => {
    const token =await getToken();
        console.log(token)

    if (token) {
      config.headers.Authorization= `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//login
export const login = async (email: String, password: String) => {
  try {
    const login = await axios.post("/User/signin", {
      email: email,
      password: password,
    });

    return login;
  } catch (error) {
    console.log(error);
  }
};

// // pages/api/user.js
// export default async (req:any, res:any) => {
//     const response = await fetch('http://localhost:1000', {
//       headers: { Cookie: req.headers.cookie }
//     });
//     const data = await response.json();
//     res.json(data);
//   };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//authenticate token
export const authToken = async (token: String) => {
  try {
    const auth = await axios.get("http://localhost:1000/User/post", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return auth;
  } catch (error: any) {
    console.log(error.response);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get all event
export const getAllEvents = async ()=>{
  try {
    
    const response =  apiClient.get('/event/events')
  return response 
  } catch (error) {
    
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
type EventDetails = {
  title: string;             // Assuming eventTitle is a string
  location: string;          // Assuming fullAddress is a string
  date: Date | string;       // Assuming startDate is a Date object or string representation of a date
  event: string;             // Assuming startTime could also be just a string, but this seems to be duplicated
  eventstarttime: string;    // Assuming startTime is a string representing time (e.g., "10:00 AM")
  eventendtime: string;      // Assuming endTime is a string representing time (e.g., "11:00 AM")
  types: string;             // Assuming eventType is a string
  description: string; 
  eventtags:string      // Assuming description is a string
};

//post events
export const postEvent = async (newEvent:EventDetails)=>{
  console.log(newEvent)
  try {
    
    const response =await apiClient.post('/event/events/', newEvent)
    return response
  } catch (error) {
    console.log(error)
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//post events pic
type eventPics={
  eventPic:File;
  eventVideo:File;
}
export const eventMedia = async(pics:eventPics)=>{
  const formData = new FormData();
  console.log(pics)
  formData.append('image', pics.eventPic)
  formData.append('video', pics.eventVideo)
  console.log(formData)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:8000/pic/event/',
    headers: {
      'Content-Type': 'multipart/form-data', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyMTgyNzgwLCJpYXQiOjE3MTIxMzk1ODAsImp0aSI6ImYxYWI4MjQ5Y2Q0YjQ3NTU4MDdkMjhhMzE0OGM2NDMyIiwidXNlcl9pZCI6Mn0.KHERtYZ8wDic8eyMwbIOPgi3X2QhG-uF6W_WnNHkZqs'
     },
     data:formData
  };
  try {
    const response = await axios.request(config)
    // const response =await apiClient.post('/pic/event/', formData)
    // return response
    return response
  } catch (error) {
    console.log(error)
  }
}