import axios from 'axios';



//login
export const login=async(email:String, password:String)=>{
    const login = await axios.post('http://localhost:1000/User/signin', {
        email:email, password:password
    })

    return login
}

// // pages/api/user.js
// export default async (req:any, res:any) => {
//     const response = await fetch('http://localhost:1000', {
//       headers: { Cookie: req.headers.cookie }
//     });
//     const data = await response.json();
//     res.json(data);
//   };
  
//authenticate token
export const authToken =async(token:String)=>{
  try {
    
    const auth = await axios.get('http://localhost:1000/User/post',
    {
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
    )
    return auth

  } catch (error:any) {
    console.log(error.response)
  }

}