import styles from "./About.module.css";
//import laSeñora from "../assets/manuelita-img.jpg";
import laSeñora from "../assets/Manuelita-Pehuajó.JPG";

export default function About() {
    return (
        <div className={styles.Guere}>
            <h1>Lucas Guerendiain</h1>
            <br/>
            <h3>Trabajo de integracion del m2</h3>
            <br/>
            <h4>de momento la aplicación está para agregar/quitar cartitas</h4>
            <img src={laSeñora} alt="manuelita"></img>
        </div>
    );
}