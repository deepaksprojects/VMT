import { storage } from "@/utils/mmkv";
import { useCallback } from "react";

const useUser = () => {
  const userFromStorage = storage.getString("user");
  let user;
  if (userFromStorage) {
    user = JSON.parse(userFromStorage || "");
  }
  const updateUser = useCallback(
    (value: any) => {
      const userData = JSON.stringify(value);
      storage.set("user", userData);
    },
    [user]
  );
  return { updateUser, user };
};
export default useUser;
