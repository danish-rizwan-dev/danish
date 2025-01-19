
$('#loginForm').on('submit', function(event) {
    event.preventDefault(); 

    var email = $('#email').val();
    var password = $('#password').val();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }
    if (email === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = './admin.html',"_self"; 
    } else {
        alert('Invalid Username OR password. Please try again.');
    }
});

