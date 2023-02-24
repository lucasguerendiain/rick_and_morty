import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
    const {detailId} = useParams();
    const [character, setCharacter] = useState("");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={styles.Detalle}>
            <Link to={"/home"}>
                <button>pa las casa</button>
            </Link>
            {console.log(character)}
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Specie:{character.species}</h2> 
            <h2>Gender: {character.gender}</h2>
            {character.origin && <h2>Origen: {character.origin.name}</h2>}
            <img src={character.image} alt=""></img>
        </div>
    );
}