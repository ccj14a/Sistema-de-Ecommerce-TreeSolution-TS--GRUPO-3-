document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        window.location.href = '../Vista/Login.php'; // Redirige a la página de inicio de sesión

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('registrarButton');

    logoutButton.addEventListener('click', function () {
        window.location.href = '../Vista/CrearCuenta.php'; // Redirige a la página de inicio
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', function () {
        window.location.href = 'Inicio.html'; // Redirige a la página de inicio
    });
});
