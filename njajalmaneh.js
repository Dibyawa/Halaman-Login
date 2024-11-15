document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password hardcoded untuk demo
    const validUsername = 'dibyamoko';
    const validPassword = 'password123';

    // Validasi login
    if (username === validUsername && password === validPassword) {
        alert('Login berhasil!');
        // Setelah login berhasil, arahkan ke halaman dashboard.html
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = 'Username atau Password salah';
    }
});
