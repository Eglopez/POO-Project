var business_cookie = 'name';
var id_cookie = 'key';

axios({
  url:'../../Backend/api/business.php'+`?id=${getCookie(id_cookie)}`,
  method:'get',
  responseType:'json'
}).then(res => {
  console.log(res.data);
  businessProfile(res.data);

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

function businessProfile(business){
  if(getCookie(business_cookie)){
    document.getElementById('business-name').innerHTML =
    `
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-building"> ${business.name}</i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
              <a class="dropdown-item" href="business-profile.html"><i class="fas fa-users text-danger"></i>Perfil</a>
              <a class="dropdown-item" href="business-products.html"><i class="fas fa-shopping-bag text-danger"></i>Mis articulos</a>
              <a class="dropdown-item" href="#"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
              <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
              <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
            </div>
      </li>
    `;

      
    document.getElementById('name-title').innerHTML =
    `<h5>${business.name}</h5>`;
    document.getElementById('nameb').innerHTML =
    `<p>${business.name}</p>`;
    document.getElementById('emailb').innerHTML =
    `<p>${business.email}</p>`;
    document.getElementById('phoneb').innerHTML =
    `<p>${business.country}</p>`;
    document.getElementById('adressb').innerHTML =
    `<p>${business.address}</p>`;
}
} 
      
    