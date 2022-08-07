import { useContext } from "react";

import SnackbarContext from "../../store/snackbar-contex";

import classes from "./Snackbar.module.css";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return <aside className={classes.snackbar}>{snackbarCtx.message}</aside>;
};

export default Snackbar;
