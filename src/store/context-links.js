import React,{useEffect, useState} from "react"

import data from '../data'

export const LinksContext = React.createContext({
    destinations: [],
    crew: [],
    technology: []
})
const LinksProvider = ({children}) => {
const [links, setLinks] = useState({})
useEffect(()=>{
    setLinks(data)
},[])
    return(
        <LinksContext.Provider value={links}>
            {children}
        </LinksContext.Provider>
    )
}

export default LinksProvider;