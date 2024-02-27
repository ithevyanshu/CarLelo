import { useEffect } from "react"

const useTitle = (title: string) => {
    useEffect(() => {
        document.title = "Car-on-Rent - "+ title;
    }, [title])
}

export default useTitle;