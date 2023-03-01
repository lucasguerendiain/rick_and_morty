import Card from './Card';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={styles.List}>
      {characters.map((char, index) => {
         return <Card 
            name={char.name} 
            species={char.species} 
            gender={char.gender} 
            image={char.image} 
            event={() => onClose(char.id)}
            id={char.id}
            index={index}
         key={"card" + index}/>
      })}
   </div>
   );
}
