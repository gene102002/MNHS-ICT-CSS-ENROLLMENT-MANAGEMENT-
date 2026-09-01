function previewProfilePicture(event) {
        const input = event.target;
        const preview = document.getElementById('profile-picture-preview');

        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                
        document.getElementById('profile-picture-preview').style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);s
        }
        preview.style.display = 'block';
}
document.getElementById('login-button').addEventListener('click', function() {
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
});
document.getElementById('register-button').addEventListener('click', function() {
    // Show the register form and hide the login form
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});
document.getElementById('forgot-password-button').addEventListener('click', function() {
    // Show the forgot password form and hide the login form
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
});