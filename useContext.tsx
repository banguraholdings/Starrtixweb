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
  first_name: string;
  last_name: string;
  password: string;
};

interface authContextType {
  username: users | null;
  loginAuthUser: (user: users) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  
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
        console.log(data.data.token.access);
        if (data.status === 200) {
          localStorage.setItem("token", data.data.token.access);
          setIsAuthenticated(true);
          // setIsLoading(false)
          console.log(isAuthenticated)
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
