import React from "react";
import AppContextProvider from "./context/Context";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <AppContextProvider>
      <IndexPage />
    </AppContextProvider>
  );
}

export default App;
