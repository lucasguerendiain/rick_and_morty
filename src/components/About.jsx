import styles from "./About.module.css";
//import laSeñora from "../assets/manuelita-img.jpg";
import laSeñora from "../assets/Manuelita-Pehuajó.JPG";

export default function About() {
    return (
        <div className={styles.Guere}>
            <h2>El Guere producciones:</h2>
            <br/>
            <h3>De Pehuajo para el mundo</h3>
            <br/>
            <h1>Manuelita es mi emblema</h1>
            <br/>
            <h5>de momento la aplicación está para agregar/quitar cartitas</h5>
            <img src={laSeñora} alt="manuelita"></img>
        </div>
    );
}