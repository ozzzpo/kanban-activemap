import React from "react";
import { useAuth } from "../../router/AuthWrapper";
import logo from "../../assets/images/activemap.png";
import Header from "../../components/Header";
import "./Dashboard.css";

export default function Dashboard() {
  const auth = useAuth();
  const user = auth.user;
  const token = user.token;
  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt='#' className='logo' />
          <span>ActiveMap</span>
        </div>
        <Header />
      </div>
    </div>
  );
}
