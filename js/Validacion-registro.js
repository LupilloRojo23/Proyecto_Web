function validateForm() {
    const nombre = document.getElementById('nombre').value;
    const diaEvento = document.getElementById('dia_evento').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const comentarios = document.getElementById('comentarios').value;

    // Validar que todos los campos estén completos
    if (nombre.trim() === '' || diaEvento.trim() === '' || correo.trim() === '' || telefono.trim() === '' || comentarios.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validar formato del correo electrónico
    if (!validarCorreo(correo)) {
        alert('El correo electrónico debe tener un formato válido.');
        return false;
    }

    // Validar número de teléfono con exactamente 20 dígitos
    if (!validarTelefono(telefono)) {
        alert('El número de teléfono debe tener exactamente 20 dígitos.');
        return false;
    }

    return true; // Permite enviar el formulario si todo está validado
}

function validarCorreo(correo) {
    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

function validarTelefono(telefono) {
    // Validar que el número de teléfono tenga exactamente 20 dígitos
    return telefono.length === 10 && !isNaN(telefono);
}
