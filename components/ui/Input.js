import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { label, name, type } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        ref={ref}
        required
        autoComplete="true"
      />
    </div>
  );
});

export default Input;
