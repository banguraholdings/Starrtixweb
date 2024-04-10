"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authToken } from "@/api/Auth";
import axios from "axios";

//define the context type
type users = {
  username: string;

  password: string;
};

//register type
type Reg={
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  email:string;
  phonenumber:string;
  date_of_birth:string;
}


interface authContextType {
  username: users | null;
  loginAuthUser: (user: users) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  signup:(newUser:Reg)=>void;
}
//context initliaization
const userContext = createContext<authContextType>({} as authContextType);

// authenticate provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [username, setUser] = useState<users | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);




  //resgiter or sign up
  const signup=async(newUser:Reg)=>{
   const data={
      "username":newUser.username,
      "email":newUser.email,
      "password":newUser.password,
      "first_name":newUser.first_name,
      "last_name":newUser.last_name,
      "phonenumber":newUser.phonenumber,
      "date_of_birth":newUser.date_of_birth
  }

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:8000/auth/register/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  await axios.request(config).then((response) => {
    console.log(response)
  })
  
  }
    //get user token from local storage and authenticate user from the db using axios
    const getTokenAndAuthenticate = async () => {
        try {
          const token = await localStorage.getItem("token");
          if (token) {
            await axios
              .get("http://127.0.0.1:8000/auth/user/", {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              })
              .then((value) => {
                console.log(value.data.userProfile);
                if (value.status === 200) {
                  setIsAuthenticated(true);
                  console.log(isAuthenticated)
                  setUser(value.data.userProfile)
                }
              });
          }
        } catch (error) {
          console.log(error);
        }
      };
  //login provider for user authentication
  const loginAuthUser = async (newUser: users) => {
    // console.log(newUser)
    await axios
      .post("http://127.0.0.1:8000/auth/login/", {
        username: newUser.username,
        password: newUser.password,
      })
      .then((data) => {
        console.log(data.data.is_supseruser);
        if (data.status === 200 && !data.data.is_supseruser) {
          localStorage.setItem("token", data.data.token.access);
          localStorage.setItem("user", "regular")
          setIsAuthenticated(true);
          // setIsLoading(false)
          console.log(isAuthenticated)
        }else if(data.status === 200 && data.data.is_supseruser){
          router.replace("/Admin/Dashboard")
          localStorage.setItem("user", "superuser")

// console.log
       }
      }).catch((error) => {
        console.log(error)
      });
  };

  //logout provider for user authentication
  const logout = () => {};



  useEffect(() => {
    getTokenAndAuthenticate();
  }, [isAuthenticated]);
  return (
    <userContext.Provider
      value={{
        username,
        loginAuthUser,
        logout,
        isAuthenticated,
        setIsAuthenticated,
        signup
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const userAuth = () => {
  const context = useContext(userContext);
  if (context == undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
