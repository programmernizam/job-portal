import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ThemeContext } from "../../contexts";
import Home from "../../pages/Home/Home";

export default function Layout() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${darkMode ? "dark" : ""}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
