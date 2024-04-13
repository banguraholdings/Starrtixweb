"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authToken, fetchuser } from "@/api/Auth";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;
//define the context type
type users = {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  email:string;
  phonenumber: string;
};

type user = {
  username: string;
  password: string;
};

//register type
type Reg = {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  phonenumber: string;
  date_of_birth: string;
};

interface authContextType {
  username: users | null;
  loginAuthUser: (user: users) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  signup: (newUser: Reg) => void;
  isLoading:boolean
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
  const [superuser, setsuperuser] = useState(false)
  const [isLoading, setIsLoading]=useState(false)
  
  //resgiter or sign up
  const signup = async (newUser: Reg) => {
    setIsLoading(true)
    const data = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      phonenumber: newUser.phonenumber,
      date_of_birth: newUser.date_of_birth,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${url}/auth/register/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // console.log(config);

    
    await axios.request(config).then((response) => {
      setIsLoading(false)
      router.push("/Auth/Signin")
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error.response.data.username)
      if(error.response.data.username){
        alert(error.response.data.username[0])
      }
    });
  };
 
  //login provider for user authentication
  const loginAuthUser = async (newUser: user) => {
    setIsLoading(true)

    let data = JSON.stringify({
      username: newUser.username,
        password: newUser.password,
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${url}/auth/login/`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    console.log(config)
    await axios
      .request(config)
      .then((data) => {
        setIsLoading(false)

        const expiration = new Date();
        expiration.setTime(expiration.getTime() + (12 * 60 * 60 * 1000)); // 12 hours from now
        if (data.status === 200 ) {
          localStorage.setItem("token", data.data.token.access);
          document.cookie=`token=${data.data.token.access}; expires=` + expiration.toUTCString() + "; path=/";
          setIsAuthenticated(true);
          window.location.reload();
          console.log(isAuthenticated);
        } 
      })
      .catch((error) => {
        setIsLoading(false)

        console.log(error);
      });
  };

  //logout provider for user authentication
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.reload();
    document.cookie ='token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';

  };

  useEffect(() => {
    fetchuser().then((user) => {
      console.log(user?.data.userProfile)
      setUser(user?.data.userProfile)
      setIsAuthenticated(true);
     
  }).catch((error)=>{
    console.log(error)
  })
    // getUser();
  }, [isAuthenticated,superuser]);
  return (
    <userContext.Provider
      value={{
        username,
        loginAuthUser,
        logout,
        isAuthenticated,
        isLoading,
        setIsAuthenticated,
        signup,
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
