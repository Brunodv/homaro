import './App.css';
import MyState from './context/MyState';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/animations.css';

function App() {
  return (
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </MyState>
  );
}

export default App;
