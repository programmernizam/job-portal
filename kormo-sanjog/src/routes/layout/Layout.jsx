import { useContext } from "react";
import Header from "../../components/Header/Header";
import { ThemeContext } from "../../contexts";

export default function Layout() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
    </div>
  );
}
