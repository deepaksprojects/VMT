import { updateSessionToken, updateUser } from "@/store/userSlice";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUser from "./mmkvStorage/useUser";

const useUserSession = () => {
  const { data, sessionToken } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const {
    updateUser: updateUserMMKV,
    user: mmkvUser,
    updateToken,
    token,
  } = useUser();
  const updateUserData = useCallback(
    (value: any) => {
      dispatch(updateUser(value));
      updateUserMMKV(value);
    },
    [data]
  );
  const updateUserToken = useCallback(
    (value: string) => {
      dispatch(updateSessionToken(value));
      updateToken(value);
    },
    [sessionToken]
  );
  useEffect(() => {
    if (mmkvUser?.name) dispatch(updateUser(mmkvUser));
    mmkvUser;
  }, []);
  const user = {
    data: data || mmkvUser,
    sessionToken: sessionToken || token,
  };
  return { user, updateUserData, updateUserToken };
};

export default useUserSession;
