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
