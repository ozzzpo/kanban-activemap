import React from "react";

export default function Header() {
  return (
    <div className='header'>
      <div className='links'>
        <a href='#'>Доска</a>
        <a href='#'>Карта</a>
      </div>

      <div className='profile'>
        <div className='person'></div>
        <div className='logout'></div>
      </div>
    </div>
  );
}
