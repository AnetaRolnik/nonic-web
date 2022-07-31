import classes from "./Input.module.css";

const Input = (props) => {
  const { label, name, type, ref } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        ref={ref}
        required={true}
        autoComplete="on"
      />
    </div>
  );
};

export default Input;
