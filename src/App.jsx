import './App.css';
import {Home} from "./components/home";
import {Routes, Route} from "react-router-dom"
import {Order} from "./components/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
