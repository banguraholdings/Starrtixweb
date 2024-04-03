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