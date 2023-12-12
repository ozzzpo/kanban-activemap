import React from "react";
import { set, useForm } from "react-hook-form";

export default function Sidebar({ setFilters, users, types }) {
  const { register, handleSubmit } = useForm();
  const dropFilters = () => {
    setFilters({});
  };
  const onSubmit = (data) => {
    setFilters(data);
  };
  return (
    <div className='sidebar'>
      <p className='sidebar_title'>Фильтры</p>
      <form className='filters' onSubmit={handleSubmit(onSubmit)}>
        <div className='select_group'>
          <div className='select'>
            <label>Вид работы</label>
            <select name='type' {...register("type")}>
              <option value=''>Вид работы</option>
              {types.map((type) => (
                <option value={type.id} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className='select'>
            <label>Исполнитель</label>
            <select name='assigned' {...register("assigned")}>
              <option value=''>Исполнитель</option>
              {users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.fio}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='buttons'>
          <button className='filter_button'>Применить</button>
        </div>
      </form>
      <button className='drop_button' onClick={dropFilters}>
        Сбросить
      </button>
    </div>
  );
}
