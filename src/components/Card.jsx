import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({name, species, gender, image, event, id, index}) {
   return (
      <div className={styles.CardDiv} key={"d" + index}>
         <button className={styles.Button} onClick={event}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={styles.Nombre}>{name}</h2>
         </Link>
         <h2 className={styles.Specie}>{species}</h2>
         <h2 className={styles.Gender}>{gender}</h2>
         <img src={image} alt="" />
      </div>
   );
}