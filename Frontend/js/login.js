function businessLogin(){
    document.getElementById('form-user').style.display = 'none';
   document.getElementById('form-Business').style.display='block';
}

function userLogin(){
    document.getElementById('form-user').style.display = 'block';
    document.getElementById('form-Business').style.display='none';
}

function userValidation(){

    form_data = {
      user_name: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
    
    console.log(document.getElementById('username').value);
    console.log(document.getElementById('password').value);

    axios({
      url:"../../Backend/api/login.php",
      method:"post",
      responseType: "json",
      headers: {'Content-Type': 'multipart/form-data' },
      data:form_data
    }).then(res=>{
      console.log(res);
      window.location.assign('../pages/home.html');
    }).catch(err =>{
      console.error(err);
    });
  }

  function businessValidation(){
    axios({
      url:'../../Backend/api/login.php',
      method:'post',
      responseType:'json',
      headers:{'Content-Type':'multipart/form-data'},
      data:{
        name:document.getElementById('name').value,
        password:document.getElementById('password-business').value
      }
    }).then(res => {
      console.log(res);
      window.location.assign('../pages/home.html');
    }).catch(err => {
      console.error(err);
    });
  }