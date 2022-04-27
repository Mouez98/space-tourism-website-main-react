import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const SharedLayout = () => {
  return(
      <>
          <HeaderNav />
          <Outlet />
      </>
  )
}

export default SharedLayout;