import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recmended from "./Recmended";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <switch>
         

          <Route path="/search/:searchTerm">
            
            <div className="app_page">
              <Sidebar />
              <SearchPage/>
            </div>
          </Route>
          <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <Recmended />
            </div>
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
