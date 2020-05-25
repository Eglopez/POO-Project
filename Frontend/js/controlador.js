
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
        window.location.assign('../pages/login.html');
    }).catch(err =>{
        console.error(err);
    });
   // window.location.assign('../pages/home.html');
   
}


function login(){
    axios({
        url:'../../Backend/api/business.php',
        method:'post',
        responseType:'json',
        headers:{'Content-Type': 'multipart/form-data'},
        data:{
            name:document.getElementById('name').value,
            acronym:document.getElementById('acronym').value,
            password:document.getElementById('password-business').value,
            email:document.getElementById('email-business').value,
            address:document.getElementById('address').value,
            latitude:document.getElementById('latitude').value,
            country:document.getElementById('country').value,
            state:document.getElementById('state').value,
            zip:document.getElementById('zip').value,
            payment:'credit',
            name_on_card:document.getElementById('cc-name'),
            card_number:document.getElementById('cc-number').value,
            card_expiration:document.getElementById('cc-expiration').value,
            card_cvv:document.getElementById('cc-cvv').value
        }
    }).then(res => {
        console.log(res);
        window.location.assign('../pages/login.html');
    }).catch(err => {
        console.error(err);
    });
}
 
 