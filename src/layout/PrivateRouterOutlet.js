import { React,  useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const PrivateRouterOutlet = () => {
  const { token } = useSelector((state) => state.tokenReducer);

  return (
    <>
      {/* {isUserLoggedIn ? ( */}
      {token.length>0 ? (
        <>
          <Header />
          <div style={{ padding: "20px" }}>
            <Outlet />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
          {/* <Login /> */}
        </>
      )}
    </>
  );
};

export default PrivateRouterOutlet;
