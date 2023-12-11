import React, { useEffect, useState } from "react";
import { useAuth } from "../../router/AuthWrapper";
import logo from "../../assets/images/activemap.png";
import Header from "../../components/Header";
import Column from "../../components/Column";
import "./Dashboard.css";
import authService from "../../api/auth.service";
import tasksService from "../../api/tasks.service";
import defaultPic from "../../assets/images/defaultpic.jpg";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

export default function Dashboard() {
  const [userPic, setUserPic] = useState(defaultPic);
  const [statuses, setStatuses] = useState([]);
  const auth = useAuth();
  const user = auth.user;
  console.log(user);
  const token = user.token;
  // const tasks = tasksService.getTasks(token).then((data) => {
  //   console.log("Response data:", data);
  // });

  useEffect(() => {
    if (user.avatar_update_date) {
      setUserPic(
        `https://team1.activemap.ru/rest/users/${user.id}/avatar?token=${token}`
      );
    }
    tasksService.getStatuses(token).then((data) => {
      if (data.res === 1) {
        setStatuses(data.status);
        console.log(data.status);
      }
    });
  }, []);

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt='#' className='logo' />
          <span>ActiveMap</span>
        </div>
        <Header name={user.fio} pic={userPic} />
        <main className='main'>
          <Sidebar />
          <div className='columns-scroll'>
            <div className='columns'>
              {statuses.map((status) => (
                <Column status={status} key={status.id} />
              ))}
              {/* <Column></Column>
              <Column></Column>
              <Column></Column>
              <Column></Column>
              <Column></Column>
              <Column></Column> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
