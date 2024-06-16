import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
