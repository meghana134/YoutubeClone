
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recmended from './Recmended';

function App() {
  return (
    <div className="App">
      {/* <h1>Youtube clone</h1> */}
      <Header/>
      
      <div className="app_page">
      <Sidebar/>
      <Recmended/>

      </div>
      
      


      {/* 3 COMPONENTS */}
      {/* HEADER */}
      {/* SIDEBAR */}
      {/* RECMONDED */}
    </div>
  );
}

export default App;
