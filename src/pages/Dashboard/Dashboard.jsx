import React, { useEffect, useState } from "react";
import { useAuth } from "../../router/AuthWrapper";
import logo from "../../assets/images/activemap.png";
import Header from "../../components/Header";
import "./Dashboard.css";
import authService from "../../api/auth.service";
import tasksService from "../../api/tasks.service";
import defaultPic from "../../assets/images/defaultpic.jpg";

export default function Dashboard() {
  const [userPic, setUserPic] = useState(defaultPic);
  const auth = useAuth();
  const user = auth.user;
  console.log(user);
  const token = user.token;
  // const tasks = tasksService
  //   .getTasks(token)
  //   .then((data) => {
  //     console.log("Response data:", data);
  //   })
  useEffect(() => {
    if (user.avatar_update_date) {
      setUserPic(
        `https://team1.activemap.ru/rest/users/${user.id}/avatar?token=${token}`
      );
    }
  }, [user]);

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt='#' className='logo' />
          <span>ActiveMap</span>
        </div>
        <Header name={user.fio} pic={userPic} />
        <div className='main'></div>
      </div>
    </div>
  );
}
