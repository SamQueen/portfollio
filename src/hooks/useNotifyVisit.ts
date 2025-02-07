
import { useEffect } from 'react'

type NotifyResponse = {
    success: boolean;
    message?: string;
    error?: string;
}
const useNotifyVisit = () => {
  useEffect(() => {

    // ensure that session storage is only on client side
    if (window && !sessionStorage.getItem("notified")) {
      fetch('/api/notifyDiscord', {method: "Post"})
      .then((res) => res.json())
      .then((data: NotifyResponse) => {
        if (data.success) {
          sessionStorage.setItem("notified", "true"); // prevent notifying multiple visits
        }
      })
    }
  }, []);
}

export default useNotifyVisit