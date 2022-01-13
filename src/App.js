import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/paginas/main/Main";
import Canchas from "./components/paginas/canchas/Canchas";
import Navbar from "./components/navbar/Navbar";
import FieldsContext from "./store/appContext";

function App() {
  return (
    <FieldsContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Canchas />} />
        </Routes>
        <Footer />
      </Router>
    </FieldsContext>
  );
}

export default App;
