import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

const SharedLayout = () => {
  return(
      <div className="container">
          <HeaderNav />
          <Outlet />
      </div>
  )
}

export default SharedLayout;