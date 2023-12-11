import React from "react";
import { useAuth } from "../../router/AuthWrapper";
import logo from "../../assets/images/activemap.png";
import Header from "../../components/Header";
import Column from "../../components/Column";
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
        <div className="columns-scroll">
          <div className="columns">
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
          </div>
        </div>
      </div>
    </div>
  );
}
