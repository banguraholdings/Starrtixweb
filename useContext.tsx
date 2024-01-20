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
  email: string;
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
              .get("http://localhost:1000/User/post", {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              })
              .then((value) => {
                console.log(value.status);
                if (value.status === 200) {
                  setIsAuthenticated(true);
                  console.log(isAuthenticated)

                }
              });
          }
        } catch (error) {
          console.log(error);
        }
      };
  //login provider for user authentication
  const loginAuthUser = async (newUser: users) => {
    await axios
      .post("http://localhost:1000/User/signin", {
        email: newUser.email,
        password: newUser.password,
      })
      .then((data) => {
        console.log(data);
        if (data.data.status === 200) {
          localStorage.setItem("token", data.data.token);
          setIsAuthenticated(true);
          // setIsLoading(false)
          console.log(isAuthenticated)
        }
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
