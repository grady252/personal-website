import { useState, useEffect } from "react"

export const useScroll = () => {
    // setting initial value to true
    const [scroll, setScroll] = useState(0);

    // running on mount
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY !== scroll) {
                setScroll(window.scrollY)
            }
        }

        // setting the event handler from web API
        document.addEventListener("scroll", onScroll);

        // cleaning up from the web API
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll]);

    return scroll

}