import React, { useState } from "react";

const SnackbarContext = React.createContext({
  message: null,
  snackbar: false,
  open: (message) => {},
  close: () => {},
});

export const SnackbarContextProvider = (props) => {
  const [message, setMessage] = useState(null);

  const openSnackbarHandler = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(null), 2500);
  };

  const closeSnackbarHandler = () => {
    setMessage(null);
  };

  const visbileSnackbar = !!message;

  const contextValue = {
    message: message,
    snackbar: visbileSnackbar,
    open: openSnackbarHandler,
    close: closeSnackbarHandler,
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
