import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { UserProvider } from "./hooks/use-user";
import { LocalStorageService, LS_KEYS } from "./services/localStorage";
import { CartProvider } from "./hooks/use-cart";
import { BookProvider } from "./hooks/use-book";
import { SpecificBookProvider } from "./hooks/use-specific-book";
import { BookData, DATA_URL } from "./services/bookDataLoader";
import ShopRoutes from "./components/shopRouter/ShopRoutes"

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <ShopRoutes />
      </div>
    </HashRouter>
  );
}

export default App;
