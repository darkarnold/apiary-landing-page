import React from "react";
import Main from "./pages/Main";
import Footer from "./components/Footer";
// import DelegateTaskModal from "./components/DelegateTaskModal";
import ModalWithForm from "./components/ModalWithForm";

function App() {
  const [firstOpen, setFirstOpen] = React.useState(false)
  // const [secondOpen, setSecondOpen] = React.useState(false)

  function handleSetFirstOpen() {
    setFirstOpen(true)
  }
  function handleSetFirstClose() {
    setFirstOpen(false)
  }
  function handleOnClose(event) {
    setFirstOpen(event)
  }
  function handleFormSubmit(event) {
    console.log(event)
  }

  return (
    <div className="root">
      <div className="root__container">
        <Main onCtaClick={handleSetFirstOpen} />
        <Footer />
        <ModalWithForm isOpen={handleSetFirstOpen} isClose={handleSetFirstClose} closeAll={handleOnClose} firstOpen={firstOpen} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;
