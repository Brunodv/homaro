import './App.css';
import MyState from './context/MyState';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <MyState>
        <Router basename="/homaro">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MyState>
  );
}

export default App;
