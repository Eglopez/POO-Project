var user_cookie = 'user_name';
var business_cookie = 'name';
var user_key = 'key';

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

  function userIcon(){
    if(getCookie(user_cookie)){
        document.getElementById('username-purchases').innerHTML =
        `
        <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-user"> ${getCookie(user_cookie)}</i>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
                  <a class="dropdown-item" href="user-profile.html"><i class="fas fa-user text-danger"></i>Perfil</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-heart text-danger"></i>Favoritos</a>
                  <a class="dropdown-item" href="user-purchases.html"><i class="fas fa-cart-arrow-down text-danger text-danger"></i>Compras</a>
                  <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
                </div>
          </li>
        `;
      }
}

userIcon();

axios({
    url:'../../Backend/api/business.php',
    method:'get',
    responseType:'json'
}).then(res => {
    console.log(res);
    businessCards(res.data);
}).catch(err => {
    console.error(err);
});

function businessCards(data){
    var business = Object.values(data);

    for(let i=0;i<business.length;i++){
        document.getElementById('user-business').innerHTML +=
        `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="card shadow bg-white rounded">
              <img src="${business[i].img}" class="card-img-top">
              <div class="card-body">
                  <ul>
                      <li>${business[i].name}</li>
                      <li id="business">
                         ${business[i].address}
                      </li>
                      
                      <li>${business[i].email}</li>
                      <li>${business[i].country}</li>
                      
                  </ul>
                  
              </div>
          </div>
        </div><br>
        `;
    }
}

function businessIcon(){
  if(getCookie(business_cookie)){
    document.getElementById('username-purchases').innerHTML =
    `
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-building"> ${getCookie(business_cookie)}</i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
              <a class="dropdown-item" href="business-profile.html"><i class="fas fa-users text-danger"></i>Perfil</a>
              <a class="dropdown-item" href="business-products.html"><i class="fas fa-shopping-bag text-danger"></i>Mis articulos</a>
              <a class="dropdown-item" href="add-products.html"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
              <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
              <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
            </div>
      </li>
    `;
  }
}
businessIcon();