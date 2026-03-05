import "./App.css";
import { LanguageProvider } from "./context/LanguageProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import ScrollToHash from "./hooks/scrollToHash";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
