import { Outlet } from "react-router-dom";
import HeaderNav from "../components/headerNav/HeaderNav";

const SharedLayout = () => {
  return(
      <>
          <HeaderNav />
          <Outlet />
      </>
  )
}

export default SharedLayout;