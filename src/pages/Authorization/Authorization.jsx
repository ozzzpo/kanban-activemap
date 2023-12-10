import React, { useEffect, useState, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import authService from "../../api/auth.service";
import "./Authorization.css";
import logo from "../../assets/images/activemap.png";
import { useAuth } from "../../router/AuthWrapper";
import { useNavigate } from "react-router-dom";

export default function Authorization() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const auth = useAuth();
  const navigate = useNavigate();
  const onSubmit = ({ login, password }) => {
    authService.sendLogPass(login, password).then((data) => {
      if (data.res === 1) {
        auth.login(data);
        navigate("/dashboard");
      } else {
        console.log("wrong");
      }
    });
  };

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt='#' className='logo' />
          <span>ActiveMap</span>
        </div>
        <div className='login'>
          <p className='title'>Вход</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputs'>
              <div className='input-group'>
                <label>Логин</label>
                <input
                  className={errors.login ? "error-input" : ""}
                  type='text'
                  name='login'
                  autoComplete='off'
                  {...register("login", { required: true })}
                />
                {errors.login && <span>Поле пустое!</span>}
              </div>
              <div className='input-group'>
                <label>Пароль</label>
                <input
                  className={errors.password ? "error-input" : ""}
                  type='password'
                  name='password'
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Поле пустое!</span>}
              </div>
            </div>
            <button type='submit'>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}
