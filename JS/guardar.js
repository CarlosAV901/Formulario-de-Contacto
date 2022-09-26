function guardar(){
    db.collection("contacto").add({
        nombre: document.getElementById("Nombre").value,
        apellidos: document.getElementById("Apellidos").value,
        email: document.getElementById("Email").value,
        telefono: document.getElementById("Telefono").value,
        asunto: document.getElementById("Asunto").value,
        mensaje: document.getElementById("Mensaje").value
    })
    .then((docRef) => {
        alert("Registro Existoso");
    })
    .catch((error) => {
        alert("Error de registro");
    });    
}