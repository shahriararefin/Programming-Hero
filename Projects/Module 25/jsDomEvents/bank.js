document.getElementById('submitLogin').addEventListener('click', function() {

   const emailField= document.getElementById('user-email');
   const userEmail = emailField.value;
   
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   
     window.location.href= 'home.html';
})

