import './App.css';
import Game from './pages/Game';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import GameList from './pages/GameList';
import { useSelector } from 'react-redux';
import Create from './pages/Create';


const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={user && user.isPublisher ? <Create /> : <Navigate to={"/"}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
