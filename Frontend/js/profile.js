var user_cookie = 'user_name';
var id_cookie = 'key';

axios({
  url:'../../Backend/api/users.php'+`?id=${getCookie(id_cookie)}`,
  method:'get',
  responseType:'json'
}).then(res => {
  console.log(res.data);
  userProfile(res.data);

}).catch(err => {
  console.error(err);
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function userProfile(user){
    document.getElementById('usernames').innerHTML = '';

    if(getCookie(user_cookie)){
        document.getElementById('usernames').innerHTML = 
        `
        <li class="nav-item dropdown" id="user-name">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"> ${getCookie(user_cookie)}</i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
            <a class="dropdown-item" href="user-profile.html"><i class="fas fa-user text-danger"></i>Perfil</a>
            <a class="dropdown-item" href="#"><i class="fas fa-heart text-danger"></i>Favoritos</a>
            <a class="dropdown-item" href="#"><i class="fas fa-cart-arrow-down text-danger text-danger"></i>Compras</a>
            <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
          </div>
        </li>
        `;
        document.getElementById('profile-img').innerHTML =
        `
        <img src="">
        <div class="file btn btn-lg btn-danger">
            Change Photo
            <input type="file" name="file">
        </div>
        `;
        document.getElementById('profile-header').innerHTML =
        `
        <h5>
            ${user.name} ${user.last_name}
        </h5>
        <h6>
            Web Developer and Designer
        </h6>
        <p class="proile-rating">RANKINGS : <span>8/10</span></p>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
            </li>
        </ul>
        `;

        document.getElementById('profile-username').innerHTML =
        `
        <p>${user.user_name}</p>
        `;
        document.getElementById('profile-name').innerHTML =
        `
        <p>${user.name}</p>
        `;
        document.getElementById('profile-email').innerHTML =
        `
        <p>${user.email_address}</p>
        `;
        document.getElementById('profile-phone').innerHTML =
        `
        <p>${user.phone_number}</p>
        `;


    }

}
