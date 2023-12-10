import React from "react";

export default function Input({ name, register, label, styles, type }) {
  return (
    <div className={`user-input ${styles}`}>
      <label>{label}</label>
      <input type={type} autoComplete="off" {...register("")} />
    </div>
  );
}
