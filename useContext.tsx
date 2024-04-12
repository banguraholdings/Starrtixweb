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
  user:string;
  superuser:boolean;
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
  const [user, setuser] = useState<string>("");
  const [superuser, setsuperuser] = useState(false)
  //get user
  const getUser = async () => {
    const user = await localStorage.getItem("user");
    const auth = await localStorage.getItem("authenticated");
      // console.log(auth)
      if(auth && auth ==="true"){
        setIsAuthenticated(true)
        if(user==="superuser"){setsuperuser(true)}
        if(user==="regular"){setsuperuser(false)}
      }
      }
    
  
  //resgiter or sign up
  const signup = async (newUser: Reg) => {
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
      url: `${url}auth/register/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios.request(config).then((response) => {
      console.log(response);
    });
  };
  //get user token from local storage and authenticate user from the db using axios
  // const getTokenAndAuthenticate = async () => {
  //   try {
  //     const token = await localStorage.getItem("token");
  //     if (token) {
  //       await axios
  //         .get(`${url}/auth/user/`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((value) => {
  //           console.log(value.data.userProfile);
  //           if (value.status === 200) {
  //             // setIsAuthenticated(true);
  //             console.log(isAuthenticated);
  //             setUser(value.data.userProfile);
  //           }
  //         });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //login provider for user authentication
  const loginAuthUser = async (newUser: user) => {
    // console.log(newUser)
    await axios
      .post(`${url}/auth/login/`, {
        username: newUser.username,
        password: newUser.password,
      })
      .then((data) => {
        localStorage.setItem("authenticated", "true");

        console.log(data.data.is_supseruser);
        if (data.status === 200 && !data.data.is_supseruser) {
          localStorage.setItem("token", data.data.token.access);
          // document.cookie = `token=${data.data.token.access}`;
          localStorage.setItem("user", "regular");
          router.replace("/");

          setIsAuthenticated(true);
          // setIsLoading(false)
          console.log(isAuthenticated);
        } else if (data.status === 200 && data.data.is_supseruser) {
          router.replace("/Admin/Dashboard");
          localStorage.setItem("user", "superuser");

          // console.log
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //logout provider for user authentication
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("authenticated");
    setIsAuthenticated(false);
    window.location.reload();
  };

  useEffect(() => {
    // getTokenAndAuthenticate();
    // localStorage.removeItem("authenticated")
    console.log(isAuthenticated,superuser)

    getUser()
    fetchuser().then((user) => {
      console.log(user?.data.userProfile)
      // if(user?.data.isSuperuser){
      //   setIsAuthenticated(true)
      //   // setsuperuser(true)
      // }else{
        // setIsAuthenticated(true)
        setUser(user?.data.userProfile)
        // setsuperuser(false)
      // }
  }).catch((error)=>{
    console.log(error)
  })
    // getUser();
  }, [isAuthenticated,superuser]);
  return (
    <userContext.Provider
      value={{
        username,
        user,
        loginAuthUser,
        logout,
        isAuthenticated,
        superuser,
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
