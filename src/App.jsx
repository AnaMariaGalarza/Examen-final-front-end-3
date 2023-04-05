import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { GlobalContext } from "./States/GlobalProvider";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Routes/NotFound";
import ContactForm from "./Routes/ContactForm";

function App() {

  const [state] = useContext(GlobalContext);

  return (
    <>
      <div className={`app ${state.theme === "light" ? "light" : "dark"}`}>
      <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/dentist" element={<Home />}></Route>
              <Route path="/dentist/:id" element={<Detail />}></Route>
              <Route path="/favs" element={<Favs />}></Route>
              <Route path="/contacto" element={<ContactForm />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
