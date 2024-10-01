document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Predefined usernames and passwords
    const admins = {
        "ACP Pradyuman": "1234",
        "Daya": "5678",
        "Abhijeet": "9876"
    };

    // Handle wrong password cases
    if (admins[username] && admins[username] !== password) {
        
        let videoUrl = '';
        if (username === "ACP Pradyuman") videoUrl = 'Videos/acp-pradyuman-wrong.mp4';
        else if (username === "Daya") videoUrl = 'Videos/Dayawrong.mp4';
        else if (username === "Abhijeet") videoUrl = 'Videos/1.mp4';

        Swal.fire({
            title: 'Wrong Password!',
            html: `<video width="100%"  autoplay><source src="${videoUrl}" type="video/mp4"></video>`,
            showConfirmButton: false,
            timer: 6000
        });

    } else if (admins[username] === password) {
        // Correct password: play the success video in full-screen mode
        Swal.fire({
            title: 'Welcome!',
            html: `<video width="100%"  autoplay><source src="Videos/IntroducingCID Sucess.mp4" type="video/mp4"></video>`,
            showConfirmButton: false,
            timer: 25000 
        }).then(() => {
            localStorage.setItem('loggedInUser', username);

            window.location.href = 'Dashboard/dashboard.html'; // Redirect to blank page
        });
    } else {
        Swal.fire({
            text: 'Invalid Character Name!',
            icon: 'error'
        });
    }
});
