import { createContext, useCallback, useMemo, useRef, useState } from "react";
import { api } from "../service/api";
import {
  clearFromLocalStorage,
  setToLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const userData = useRef({
    id: "",
    email: "",
    password: "",
    name: "",
    id_document: "",
    id_condominium: "",
    phone_number: "",
    block: "",
    apartment: "",
    role: "",
    created_at: "",
    updated_at: "",
  });

  const findUser = useCallback(async ({ id, token }) => {
    try {
      const { data } = await api.get(`/user/${id}`, {
        headers: { token },
      });

      userData.current = data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signin = useCallback(
    async (user, callback) => {
      setIsLoading(true);
      try {
        const { data } = await api.post("/login", user);

        if (data.data) {
          setToLocalStorage("userAuth", data.data);
          await findUser(data.data);
          callback();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [findUser]
  );

  const signout = useCallback((callback) => {
    clearFromLocalStorage();
    userData.current = null;
    callback();
  }, []);

  const value = useMemo(
    () => ({ userData, signin, signout, isLoading }),
    [userData, signin, signout, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
