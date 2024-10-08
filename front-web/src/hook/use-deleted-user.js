import React from "react";
import { api } from "../service/api";
import { getFromLocalStorage } from "../utils/localStorage";

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { userAuth } = getFromLocalStorage("userAuth");

  const fetchDeleteUser = React.useCallback(
    async (callback) => {
      setIsLoading(true);
      try {
        await api.delete(`/user/${userAuth.id}`, {
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
    fetchDeleteUser,
  };
};
