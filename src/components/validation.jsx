const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validation(inputs) {
    let errors = {};
    const contra = inputs.password;
    if (!regexEmail.test(inputs.username) || inputs.username.length > 35 || !inputs.username) {
        errors.username = "Debe ser un correo electrónico valido";
    }
    if (contra.length < 6 || contra.length > 10 || !(/\d/.test(contra))) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres y al menos un numero";
    }
    return errors;
}