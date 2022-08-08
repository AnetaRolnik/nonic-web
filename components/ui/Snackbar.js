import { useContext } from "react";

import SnackbarContext from "../../store/snackbar-contex";

import classes from "./Snackbar.module.css";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  const buttonClickHandler = () => snackbarCtx.close();

  return (
    <aside className={classes.snackbar}>
      {snackbarCtx.message}
      <button onClick={buttonClickHandler} className={classes.close}>
        <svg viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </button>
    </aside>
  );
};

export default Snackbar;
