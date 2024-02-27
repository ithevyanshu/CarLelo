import { useEffect } from "react"

const useTitle = (title: string) => {
    useEffect(() => {
        document.title = "CarLelo - "+ title;
    }, [title])
}

export default useTitle;