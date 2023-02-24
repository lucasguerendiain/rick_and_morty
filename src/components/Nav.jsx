import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";



export default function Nav({onSearch, logout}) {
    const {pathname} = useLocation()
    const randomNumber = (max) => {
        return Math.floor(Math.random() * max)
    }
    if (pathname !== "/"){
    return(
        <div className={styles.Nav}>
            <button onClick={() => {if (window.confirm("vo' tas seguro/a?")) logout()}}>log out</button>
            <NavLink to={"/home"} className={({isActive}) => isActive ? styles.active : styles.disable}>Las casa'</NavLink>
            <hr/>
            <NavLink to={"/About"} className={({isActive}) => isActive ? styles.active : styles.disable}>El Guere</NavLink>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(randomNumber(826))}>Random</button>
        </div>
    );
    }
}

