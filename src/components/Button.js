import React from 'react';
import './LoginForm.css';
const Button = ({ text, color }) => (
    <button className={`btn btn-${color}`}>{text}</button>
  );
export default Button;