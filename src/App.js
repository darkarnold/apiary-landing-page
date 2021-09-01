import React from "react";
import Main from "./pages/Main";
import Footer from "./components/Footer";

import Header from "./Header";

function App() {
  return (
    <div className="root">
      <div className="root__container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
