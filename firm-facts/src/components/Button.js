import React from 'react';
import './Button.scss';
import { CiSearch } from "react-icons/ci";

function Button({ text, hasIcon, status, disabled, showIcon, children }) {
  return (
    <div className={`custom-button ${status}`}>
      <span className='icon-container'>
        <CiSearch className={`icon ${hasIcon === true ?  "" : "hidden"}`} />
        </span>
      <span className='button-text'>{text}</span>
    </div>
  )
};

export default Button;
