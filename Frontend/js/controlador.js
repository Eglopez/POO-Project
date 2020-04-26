
function showBusinessForm(){
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('businessForm').style.display = 'block';
}

function showUserForm(){
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('businessForm').style.display = 'none';
}


function emptyValidation(id){
    if (document.getElementById(id).value == ''){
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
    }else{ 
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
    }
}

function confirmPasswordVlidation(){
    if(document.getElementById('password').value == document.getElementById('confirmpassword')){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
    }else{
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error'); 
    }
}

function loginUser(){
    emptyValidation('formname');
    emptyValidation('formlastname');
    emptyValidation('username');
    emptyValidation('email');
    emptyValidation('password');
    emptyValidation('confirmpassword');
    emptyValidation('phone');
}

function login(){
    emptyValidation('firstName');
    emptyValidation('Acronym');
    emptyValidation('email');
    emptyValidation('adress');
    emptyValidation('latitude');
    emptyValidation('country');
    emptyValidation('zip');
    emptyValidation('');
}
 
 