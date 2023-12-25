import axios from 'axios';



//login
export const login=async(email:String, password:String)=>{
    const login = await axios.post('http://localhost:1000/User/signin', {
        email:email, password:password
    })

    return login
}

// pages/api/user.js
export default async (req:any, res:any) => {
    const response = await fetch('http://localhost:1000', {
      headers: { Cookie: req.headers.cookie }
    });
    const data = await response.json();
    res.json(data);
  };
  