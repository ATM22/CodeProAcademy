
/*-----------------------------Contenedor del Login del Usuario----------------------------*/
const contenedor = document.querySelector('.contenedorSesion');
const user = document.querySelector('.Usuario')
const enlaceSesion = document.querySelector('.link-Inicio');
const enlaceRegistro = document.querySelector('.link-Registro');
const btnRegistro = document.querySelector('.registro');
const btnInicioSesion = document.querySelector('.inicioSesion');
const icono_cerrar = document.querySelector('.icono_cerrar');


enlaceRegistro.addEventListener('click', ()=> {
    contenedor.classList.add('activo');
});

enlaceSesion.addEventListener('click', ()=> {
    contenedor.classList.remove('activo');
});


btnInicioSesion.addEventListener('click', ()=> {
    contenedor.classList.add('btn-seleccionado');
    user.classList.add('Activado')
});

btnRegistro.addEventListener('click', ()=> {
    user.classList.add('Activado')
    contenedor.classList.add('btn2-seleccion');
    enlaceSesion.addEventListener('click', ()=> {
        contenedor.classList.add('enlaceI');
    });
    enlaceRegistro.addEventListener('click', ()=> {
        contenedor.classList.remove('enlaceI');
    });

})

icono_cerrar.addEventListener('click', ()=> {
    contenedor.classList.remove('btn-seleccionado');
    contenedor.classList.remove('btn2-seleccion');
    user.classList.remove('Activado');
    user.classList.remove('Activado');
    contenedor.classList.remove('activo');
    contenedor.classList.remove('enlaceI');
});


/*--------------------------------------lOGIN DE USUARIO-----------------------------------*/
// Obtener los elementos del formulario
const formInicioSesion = document.getElementById('formInicioSesion');
const formRegistro = document.getElementById('formRegistro');


const nombreUsuario = document.getElementById('nombreUsuario');

// Función para manejar el evento de envío del formulario
function manejarEnvio(event) {
 event.preventDefault(); 

 const nombre = document.getElementById('nombre');
 const correo = document.getElementById('correo');


 const valorIngresado = (nombre.value !== '') ? nombre.value : correo.value;


 nombreUsuario.textContent = valorIngresado;

 cerrarContenedor();
 
}
//Funcion para colocar el nombre/correo del usuario//
function cerrarContenedor(){
    const registroBtn = document.getElementById("btn_registro");
    const inicioSesionBtn = document.getElementById("btn_inicio");
    const usuarioLogueado = document.getElementById('usuarioLogueado');
    const divNavegación = document.getElementsByClassName("navegacion");

    registroBtn.style.display = "none";
    inicioSesionBtn.style.display = "none";
    usuarioLogueado.style.display='block';
    divNavegación.style.marginRigth = "-400px"

}


formInicioSesion.addEventListener('submit', manejarEnvio);
formRegistro.addEventListener('submit',  manejarEnvio);


/*-----------------------------------------Sección:Cambio de lección---------------------------*/
const btnLeccionUno = document.querySelector('.leccion');
const btnRegresar = document.querySelector('.btnRegresar');
const contenidoLeccion = document.querySelector('.contenidoLeccion');
const contenidoHistoria = document.querySelector('.historia');

btnLeccionUno.addEventListener('click', ()=> {
    contenidoHistoria.classList.add('esconder');
    contenidoLeccion.classList.add('aparecer');
});

btnRegresar.addEventListener('click', ()=> {
    contenidoHistoria.classList.remove('esconder');
    contenidoLeccion.classList.remove('aparecer');
});




