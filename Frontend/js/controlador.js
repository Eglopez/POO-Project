
function showBusinessForm(){
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('businessForm').style.display = 'block';
}

function showUserForm(){
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('businessForm').style.display = 'none';
}

function radioButtonValue(){
    let radio_value = document.getElementsByName('inlineRadioOptions');

    for(let i=0;i<radio_value.length;i++){
        if(radio_value[i].cheked){
            radio_value[i].value;
            break;
        }
    }
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

    console.log(document.getElementById('formname').value);

    user = {
        name:document.getElementById('formname').value,
        last_name:document.getElementById('formlastname').value,
        user_name:document.getElementById('username').value,
        email_address:document.getElementById('email').value,
        password:document.getElementById('password').value,
        confirm_password:document.getElementById('confirmpassword').value,
        phone_number:document.getElementById('phone').value,
        
    }
   
    
   

    console.log(user);

   axios({
        
        url: "../../Backend/api/users.php",
        method: "post",
        responseType: "json",
        headers: {'Content-Type': 'multipart/form-data' },
        data: user
        
    }).then(res => {
        console.log(res);
        //window.location.assign('../pages/home.html');
    }).catch(err =>{
        console.error(err);
    });
   // window.location.assign('../pages/home.html');
   
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
 
 