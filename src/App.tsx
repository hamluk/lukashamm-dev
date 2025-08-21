import "./App.css";
import { LanguageProvider } from "./context/LanguageProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/lukashamm-dev/">
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
