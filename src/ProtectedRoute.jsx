import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
import MiniSidebar from "./Components/Common/MiniSidebar";
import { useNavigate } from "react-router-dom";
import ParentLayout from "./layouts/ParentLayout";

const ProtectedRoute = (props) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const { Component } = props;
  const location = useLocation();
  const auth = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!auth) {
      console.log("no auth");
      return navigate("/");
    }
  }, [auth]);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggle]);
  const handleToggleSidebar = () => {
    setToggle(true);
  };
  return (
    <>
      {auth && (
        <section className="d-flex w-100 custom-scrollbar sidebarMediumS">
          {location.pathname === "/assesment-welcome" ||
          location.pathname === "/assesment" ? null : (
            <>
              <MiniSidebar toggle={toggle} setToggle={setToggle} /> <Sidebar />
            </>
          )}
          <div className="d-flex flex-column w-full w-100 position-relative">
            <Navbar handleToggleSidebar={handleToggleSidebar} />
            <main
              className={
                location.pathname === "/assesment"
                  ? "assesmentsWrapper "
                  : "routesWrapper mainComponent "
              }
            >
              {auth.user === "parent" ? (
                <ParentLayout>{<Component />}</ParentLayout>
              ) : (
                <Component />
              )}
            </main>
          </div>
        </section>
      )}
    </>
  );
};

export default ProtectedRoute;
