import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

export function Card(props) {
   const {name, species, gender, image, event, id, index, addFavorite, deleteFavorite, myFavorites} = props
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      }
      else {
         setIsFav(true);
         const {addFavorite, deleteFavorite, myFavorites, event, ...aux} = props; 
         addFavorite(aux);
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.CardDiv}>
         {event ? (<button className={styles.Button} onClick={event}>X</button>) : null}
         <Link to={`/detail/${id}`} className={styles.link}>
            <h2 className={styles.Nombre}>{name}</h2>
         </Link>
         <h2 className={styles.Specie}>{species}</h2>
         <h2 className={styles.Gender}>{gender}</h2>
         <img src={image} alt="" />
         {isFav ? (
            <button onClick={handleFavorite} className={styles.FavButtonOn}>❤️</button>
                  ) : (
            <button onClick={handleFavorite} className={styles.FavButtonOff}>🤍</button>)
         }
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite:   (char) => {dispatch(addFavorite(char))},
      deleteFavorite: (id) => {dispatch(deleteFavorite(id))}
   }
};

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);