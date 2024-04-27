import { useState } from "react";
import { ThemeContext } from "./contexts/index";
import Layout from "./routes/layout/Layout";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Layout />
    </ThemeContext.Provider>
  );
}
