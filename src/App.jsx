import './App.css';
import {Home} from "./components/home";
import {Routes, Route} from "react-router-dom";
// import {BrowserRouter as Switch} from "react-router-dom";
import {Order} from "./components/Order";
import {Modal} from "./components/modal";


function App() {
  return (
    <div className="App">
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/modal" element={<Modal />} />


      </Routes>
    </div>
  );
}

export default App;
