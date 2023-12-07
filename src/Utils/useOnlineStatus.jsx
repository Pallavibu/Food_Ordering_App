import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  // we want to use eventlisteners just once that is the reason we are using useEffect

  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
