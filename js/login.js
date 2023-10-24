document.getElementById('btn-login').addEventListener('click', function(event){
     const emaillField = document.getElementById('user_email');
     const email = emaillField.value;
    
     const passField = document.getElementById('user_password');
     const pass = passField.value;

    if(email === 'dady@bank.com' && pass === 'mydadybank'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})