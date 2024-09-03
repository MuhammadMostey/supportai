export const chatStyles = (theme) => {
  return {
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
    },
    mainText: {
      textAlign: "center",
      paddingBottom: 1,
      fontWeight: "bold",
    },
    chatBox: {
      border: "1px solid black",
      width: "500px",
      height: "750px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 4,
    },
    chatHistory: { flexGrow: 1, overflow: "auto", maxHeight: "100%" },
    chatControls: {},
    messageBox: {
      display: "flex",
      color: "white",
    },
  };
};
