import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   const handleInputChange = (event) => {
      setCharacter(event.target.value);
   }

   const onSearchMask = () => {
      let aux = character;
      setCharacter("");
      onSearch(aux);
   }

   return (
      <div className={styles.Barra}>
         <input type='search' onChange={handleInputChange} value={character}/>
         <button onClick={() => onSearchMask()}>Agregar</button>
      </div>
   );
}
