import React, { useState } from "react";
import { useForm } from "react-hook-form";
import service from "../../api/auth.service";
import "./Authorization.css";

export default function Authorization() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isCorrect, setIsCorrect] = useState(null);

  const onSubmit = ({ login, password }) => {
    service.sendLogPass(login, password).then((data) => console.log(data));
  };

  return (
    <div className="wrapper">
      <div className="content">
        <p className="title">Вход</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="input-group">
              <label>Логин</label>
              <input
                className={errors.login ? "error-input" : ""}
                type="text"
                name="login"
                autoComplete="off"
                {...register("login", { required: true })}
              />
              {errors.login && <span>Поле пустое!</span>}
            </div>
            <div className="input-group">
              <label>Пароль</label>
              <input
                className={errors.password ? "error-input" : ""}
                type="password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Поле пустое!</span>}
            </div>
          </div>
          <button type="submit">Войти</button>
          <p>{isCorrect}</p>
        </form>
      </div>
    </div>
  );
}
