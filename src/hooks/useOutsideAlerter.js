import { useEffect } from "react";

function useOutsideAlerter(ref, func) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    const handleOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("he");
        func();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
