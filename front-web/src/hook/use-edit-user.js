import React from "react";
import { api } from "../service/api";
import { getFromLocalStorage } from "../utils/localStorage";

export const useEditUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { userAuth } = getFromLocalStorage("userAuth");

  const fetchEditUser = React.useCallback(
    async (user, callback) => {
      setIsLoading(true);
      try {
        await api.put(`/user/${userAuth.id}`, user, {
          headers: { token: userAuth.token },
        });

        callback();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [userAuth.id, userAuth.token]
  );

  return {
    isLoading,
    fetchEditUser,
  };
};
