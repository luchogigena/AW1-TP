document.addEventListener('DOMContentLoaded', function() {
    /*Selecciono el formulario de login y el botón de cerrar sesión*/
    const loginForm = document.getElementById('loginForm');
    const cerrarSesionButton = document.getElementById('cerrarSesion');

   
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        /* msj inicio de sesión exitoso*/
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html'; /* Redirecciona a la página principal*/
    });
/* botón de cerrar sesión*/
    cerrarSesionButton.addEventListener('click', function() {
        alert('Has cerrado sesión');
        window.location.href = 'login.html'; /* Redirecciona a la página de login*/
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    const cerrarSesionButton = document.getElementById('cerrarSesion');

    
    cerrarSesionButton.addEventListener('click', function() {
       
        alert('Has cerrado sesión');
        // Redireccionar a la página de login
        window.location.href = 'login.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Estructura de datos: array de objetos con las direcciones y títulos de las páginas
    const paginas = [
        { url: 'index.html', titulo: 'Inicio' },
        { url: 'sabores.html', titulo: 'Sabores' },
        { url: 'calidad.html', titulo: 'Calidad' },
        { url: 'login.html', titulo: 'Login' },
        { url: 'registro.html', titulo: 'Registro' }
    ];

    /* elemento nav donde se generará el menú*/
    const nav = document.querySelector('nav ul');

   
    paginas.forEach(pagina => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pagina.url;
        a.textContent = pagina.titulo;
        li.appendChild(a);
        nav.appendChild(li);
    });

   
    const cerrarSesionButton = document.getElementById('cerrarSesion');
    
      cerrarSesionButton.addEventListener('click', function() {
        alert('Has cerrado sesión');
        window.location.href = 'login.html'; /* Redirecciona  página de login*/
    });
});

