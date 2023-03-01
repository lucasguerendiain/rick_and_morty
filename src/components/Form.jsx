import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import {validation} from "./validation.jsx";

export default function Form({login}) {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setInputs({...inputs,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        setErrors(validation(inputs));
    }, [inputs]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).length === 0) {
            login(inputs);
        } else alert("Te fallan los datos, maestro/a");
}

    return (
        <form className={styles.Formulario} onSubmit={handleSubmit}>
            <label>Username: 
                <input
                type="text"
                name="username"
                value={inputs.username}
                placeholder="Usuario..."
                onChange={handleChange}
                className={errors.username && styles.Warning}
                >
                </input>
                <br/>
                {errors.username && <p className={styles.Danger}>{errors.username}</p>}
            </label>
            <br></br>
            <label>Password: 
                <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    placeholder="Password..."
                    onChange={handleChange}
                    className={errors.password && styles.Warning}
                >
                </input>
                <br/>
                {errors.password && <p className={styles.Danger}>{errors.password}</p>}
            </label>
            <button type="submit">confirmar</button>
        </form>
    );
}

