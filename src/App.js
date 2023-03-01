import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App () {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const username = "lucas@guere.com";
  const password = "1234567";

  const login = (userData) => {
    if (userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        if (characters.length === 0) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
            if ((characters.filter((char) => char.id === data.id).length === 0)){
              setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      } else {
          window.alert('No hay personajes con ese ID');
      }
    });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} logout={logout}/>
      <Routes>
        <Route path="/" element={<Form login={login}/>}>Form</Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/favorites" element={<Favorites/>}>Favorites</Route>
        <Route path="/detail/:detailId" element={<Detail/>}>CardDetail</Route>
      </Routes>
    </div>
  )
}

export default App
