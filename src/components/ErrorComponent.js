import { useRouteError } from "react-router-dom"

export default function ErrorComponent(){
    const error = useRouteError()
    console.log(error)
    return(
        <h1>{error.message}</h1>
    )
}