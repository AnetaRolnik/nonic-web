import React, { useState } from "react";

const SnackbarContext = React.createContext({
  message: null,
  snackbar: false,
  show: (message) => {},
});

export const SnackbarContextProvider = (props) => {
  const [message, setMessage] = useState(null);

  const showSnackbarHandler = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(null), 2000);
  };

  const visbileSnackbar = !!message;

  const contextValue = {
    message: message,
    snackbar: visbileSnackbar,
    show: showSnackbarHandler,
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
