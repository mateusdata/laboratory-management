import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import { AuthProvider, Context } from "../context/authContext";
import { Spin } from 'antd';
import { GlobalContext } from "../context/globalContext";


const MyRoutes = () => {

  function Private({ children }) {
    const { authenticated, loading } = useContext(Context);


    if (loading) {
      return <div style={{display:"flex", color: "blue", justifyContent:"center",alignItems:"center", height:"100vh" }}>
          <Spin size="large" delay={0} />
         </div>
    }
    if (!authenticated) {
      return <Navigate to={"/login" || "/test"} />
    }
    return children
  }
  return (
    <BrowserRouter>
    <GlobalContext>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Private>  <Home /> </Private>} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
      </GlobalContext>
    </BrowserRouter>
  );
};
export default MyRoutes;
