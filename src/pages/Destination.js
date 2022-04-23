import { useContext } from "react";
import {  useLocation } from "react-router-dom";
import { LinksContext } from "../store/context-links";

const Destination = () => {
    const linksCtx = useContext(LinksContext)
    const location = useLocation()
    const currentPage = location.pathname.slice(1)

    console.log(linksCtx.currentPage);
    
   return(
       <section className={currentPage} >
          <h2>{currentPage}</h2>
       <p>
           {linksCtx.currentPage}
       </p> 
       </section>
       
   )
}

export default Destination