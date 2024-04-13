import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;
// Create an axios instance for authenticated users
export const apiClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  maxBodyLength: Infinity,
});

//for non authenticated
const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  maxBodyLength: Infinity,
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    const token = await getToken();
    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//authtoken

export const fetchuser=async()=>{

    const response = apiClient.get('/auth/user/')
    return response 

}
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
    const auth = await axios.get(`${url}/User/post`, {
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
//get  event by if=d
export const getAllEvents = async (id:string) => {
  try {
    const response = api.get(`/public/events/${id}`);
    return response;
  } catch (error) {}
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get all event
export const getAllEvent = async () => {
  try {
    const response = api.get("/public/events/");
    return response;
  } catch (error) {}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
type EventDetails = {
  title: string; // Assuming eventTitle is a string
  location: string; // Assuming fullAddress is a string
  date: Date | string; // Assuming startDate is a Date object or string representation of a date
  event: string; // Assuming startTime could also be just a string, but this seems to be duplicated
  eventstarttime: string; // Assuming startTime is a string representing time (e.g., "10:00 AM")
  eventendtime: string; // Assuming endTime is a string representing time (e.g., "11:00 AM")
  types: string; // Assuming eventType is a string
  description: string;
  eventtags: string; // Assuming description is a string
  eventPic: File;
  eventVideo: File;
  token: string; // Assuming token is a string
};

//post events
export const postEvent = async (newEvent: EventDetails) => {
  ///form data
  const formData = new FormData();
  formData.append("title", newEvent.title);
  formData.append("location", newEvent.location);
  if (newEvent.date instanceof Date) {
    // Now TypeScript knows 'value' is a Date, so .toISOString() can be called safely
    formData.append("date", newEvent.date.toISOString());
  } else {
    // TypeScript knows 'value' is a string here, so it can be appended directly
    formData.append("date", newEvent.date);
  }
  //  formData.append('date',newEvent.date.toISOString())
  formData.append("event", newEvent.eventstarttime);
  formData.append("eventstarttime", newEvent.eventstarttime);
  formData.append("eventendtime", newEvent.eventendtime);
  formData.append("types", newEvent.types);
  formData.append("description", newEvent.description);
  formData.append("eventtags", "hello");
  formData.append("image", newEvent.eventPic);
  formData.append("video", newEvent.eventVideo);
  console.log(newEvent);
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${url}/event/events/`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${newEvent.token}`,
      },
      data: formData,
    };
    // const response =await apiClient.post('/event/events/', formData)
    const response = await apiClient.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//post events pic
type eventPics = {
  eventPic: File;
  eventVideo: File;
  token: string;
};
export const eventMedia = async (pics: eventPics) => {
  const formData = new FormData();
  console.log(pics);
  formData.append("image", pics.eventPic);
  formData.append("video", pics.eventVideo);
  console.log(formData);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}/pic/event/`,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${pics.token}`,
    },
    data: formData,
  };
  try {
    const response = await axios.request(config);
    // const response =await apiClient.post('/pic/event/', formData)
    // return response
    return response;
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////////////////////////////////////////
//upload profile pic
export const uploadProfilePic = (data: any, token: string) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}/pic/profilepic/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  const response = axios.request(config);
  return response;
};

////////////////////////////////////////////////////////////////////////
//get profile pic

export const getProfilePic = async () => {
  try {
    const response = await apiClient.get("/pic/profilepic/");
    return response;
  } catch (error) {}
};

////////////////////////////////////////////////////////////////////////
//create ticket

type ticket = {
  ticketnumber: string;
  expirationdate: string;
  event: number;
};
export const createTicket = async (values: ticket) => {
  const data = {
    ticketnumber: values.ticketnumber,
    expirationdate: values.expirationdate,
    ticketsold: 0,
    ticketleft: values.ticketnumber,
    ticketscanned: 0,
    event: values.event,
  };
  try {
    const response = await apiClient.post("/event/tickets/", data);
    return response;
  } catch (error) {}
};

////////////////////////////////////////////////////////////////////////
//create ticket
export const getAllTickets = async () => {
  try {
    const response = await apiClient.get("/event/tickets");
    return response;
  } catch (error) {}
};



////////////////////////////////////////////////////////////////////////
//Book ticket


type BookTicket ={
  event:number;
  name:string;
  email:string;
  phonenumber:string;
  number_of_tickets:number;
}
export const BookdTicket=async (values:BookTicket) => {
  const data={
    event:values.event,
    name:values.name,
    email:values.email,
    phonenumber:values.phonenumber,
    number_of_tickets:values.number_of_tickets
  }
  try {
    const response = await api.post("/event/booking/",data)
    return response
  } catch (error) {
    
  }
}


////////////////////////////////////////////////////////////////////////
// get Booked ticket

export type tickets = {
  booked_on:string;
  email:string;
  event:number;
  id:number;
  name:string;
  number_of_tickets:number;
  phonenumber:string;
  qrcode:string;
  unique_id:string;
}


export interface ApiResponse{
  items:tickets[];
}
export const getTicket=async(id:string)=>{
  try {
    const response = await apiClient.get(`/event/booking/by-unique-id/${id}`)
    return response.data
  } catch (error) {
    
  }
}