const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

/*validacion de expresiones en los inputs*/
const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupoNombre').classList.remove('grupoFormulario-incorrecto');
            } else{
                document.getElementById('grupoNombre').classList.add('grupoFormulario-incorrecto');
            }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupoApellido').classList.remove('grupoFormulario-incorrecto');
            } else{
                document.getElementById('grupoApellido').classList.add('grupoFormulario-incorrecto');
            }
        break;
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupoCorreo').classList.remove('grupoFormulario-incorrecto');
            } else{
                document.getElementById('grupoCorreo').classList.add('grupoFormulario-incorrecto');
            }
        break;
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupoTelefono').classList.remove('grupoFormulario-incorrecto');
            } else{
                document.getElementById('grupoTelefono').classList.add('grupoFormulario-incorrecto');
            }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

/*evita mandar los datos en la url*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

});