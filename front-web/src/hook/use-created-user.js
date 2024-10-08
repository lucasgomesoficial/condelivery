import React from "react";
import { api } from "../service/api";

export const useCreatedUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchCreatedUser = React.useCallback(async (user, callback) => {
    setIsLoading(true);
    try {
      await api.post("/user", user);

      callback();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    fetchCreatedUser,
  };
};
