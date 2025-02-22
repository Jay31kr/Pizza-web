/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./App.css";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
