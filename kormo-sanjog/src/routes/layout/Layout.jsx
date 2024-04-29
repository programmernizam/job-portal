import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ThemeContext } from "../../contexts";

export default function Layout() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${darkMode ? "dark" : ""}`}>
      <Header />
      <Footer />
    </div>
  );
}
