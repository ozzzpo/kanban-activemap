import React, { useEffect, useState } from "react";
import logout from "../assets/images/log-out.svg";
import { useNavigate } from "react-router-dom";
import authService from "../api/auth.service";

export default function Header({ name, pic, token, roleId }) {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    authService.getUserRoles(token).then((data) => {
      setUserRole(data.items.find((role) => role.id == roleId));
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='links'>
        <a href='#'>Доска</a>
        <a href='#'>Карта</a>
      </div>

      <div className='profile'>
        <div className='person'>
          <div className='name'>
            <p>{name}</p>
            <p>{userRole.name}</p>
          </div>
          <div className='profpicture'>
            <img src={pic} alt='#' />
          </div>
        </div>
        <div onClick={() => navigate("/login")} className='logout'>
          <img src={logout} alt='' />
          <span>Выход</span>
        </div>
      </div>
    </div>
  );
}
