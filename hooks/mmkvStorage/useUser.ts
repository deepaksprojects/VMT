import { storage } from "@/utils/mmkv";
import { useCallback } from "react";

const useUser = () => {
  const userFromStorage = storage.getString("user");
  const tokenFromStorage = storage.getString("token");

  let user, token;
  if (userFromStorage) {
    user = JSON.parse(userFromStorage || "");
  }
  if (tokenFromStorage) {
    token = JSON.parse(tokenFromStorage || "");
  }
  const updateUser = useCallback(
    (value: any) => {
      const userData = JSON.stringify(value);
      storage.set("user", userData);
    },
    [user]
  );

  const updateToken = useCallback(
    (value: any) => {
      const tokenData = JSON.stringify(value);
      storage.set("token", tokenData);
    },
    [user]
  );
  return { updateUser, user, updateToken, token };
};
export default useUser;
