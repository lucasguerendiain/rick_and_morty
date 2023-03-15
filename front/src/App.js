import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites.jsx';
import axios from "axios";

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
    else alert("Usuario y/o Contraseña incorrecta, titán");
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    axios.get(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.data)
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
    })
    .catch((error) => {
      console.log(error.message);
    })
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
