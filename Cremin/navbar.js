document.addEventListener('DOMContentLoaded', function() {
    // Estructura de datos: array de objetos con las direcciones y títulos de las páginas
    const paginas = [
        { url: 'index.html', titulo: 'Inicio' },
        { url: 'sabores.html', titulo: 'Sabores' },
        { url: 'calidad.html', titulo: 'Calidad' },
        { url: 'perfil.html', titulo: 'Perfil' },
        { url: 'configuracion.html', titulo: 'Configuración' }
    ];

  
    const menuNavegacion = document.getElementById('menuNavegacion');

   
    paginas.forEach(pagina => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pagina.url;
        a.textContent = pagina.titulo;
        li.appendChild(a);
        menuNavegacion.appendChild(li);
    });

   
    const cerrarSesionButton = document.getElementById('cerrarSesion');

    
    cerrarSesionButton.addEventListener('click', function() {
        alert('Has cerrado sesión');
        window.location.href = 'login.html';
    });
});