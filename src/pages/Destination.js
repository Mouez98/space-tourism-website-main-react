import { useParams, useLocation } from "react-router-dom"

const Destination = () => {
    const parm = useParams()
    const location = useLocation()
    console.log(location);
    const searchParams =new URLSearchParams.get(location.pathname)
    console.log(searchParams);
   return(
       <h2>Destination</h2>
   )
}

export default Destination