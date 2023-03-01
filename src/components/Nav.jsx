import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";



export default function Nav({onSearch, logout}) {
    const {pathname} = useLocation()
    const randomNumber = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }
    if (pathname !== "/"){
    return(
        <div className={styles.Nav}>
            <button onClick={() => {if (window.confirm("vo' tas seguro/a?")) logout()}} className={styles.Irse}>log out</button>
            <br/>
            <NavLink to={"/home"} className={({isActive}) => isActive ? styles.active : styles.disable}>*Casita*</NavLink>
            <br/>
            <NavLink to={"/About"} className={({isActive}) => isActive ? styles.active : styles.disable}>FAQ</NavLink>
            <br></br>
            <NavLink to={"./favorites"} className={({isActive}) => isActive ? styles.active : styles.disable}>Favorites</NavLink>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(randomNumber(825))}>Random</button>
        </div>
    );
    }
}

