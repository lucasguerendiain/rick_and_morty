import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   const handleInputChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={styles.Barra}>
         <input type='search' onChange={handleInputChange}/>
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
