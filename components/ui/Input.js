import React from "react";

import classes from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const { label, name, type } = props;

  return (
    <div className={classes["form-control"]}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        ref={ref}
        required
        autoComplete="true"
        className={classes.input}
      />
    </div>
  );
});

export default Input;
