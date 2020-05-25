var business_cookie = 'name';
var id_cookie = 'key';
var data = [];

axios({
    url:'../../Backend/api/business.php'+`?id=${getCookie(id_cookie)}`,
    method:'get',
    responseType:'json'
  }).then(res => {
    console.log(res.data);
    businessIcon(res.data);
  
  }).catch(err => {
    console.error(err);
  });

  axios({
      url:'../../Backend/api/products.php'+`?id=${getCookie(id_cookie)}`,
      method:'get',
      responseType:'json'
  }).then(res => {
      console.log(res.data);
      productCards(res.data);
  })

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

  function businessIcon(business){
      
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
    }
}   

function productCards(products){

    console.log(Object.keys(products));
    var product = Object.values(products);

    for(let i=0;i<product.length;i++){
        document.getElementById('products').innerHTML +=
        `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="card shadow bg-white rounded">
              <img src="${product[i].img}" class="card-img-top">
              <div class="card-body">
                  <ul>
                      <li>${product[i].description}</li>
                      <li id="business">
                         ${getCookie(business_cookie)}
                      </li>
                      <li><i class="fas fa-tags"></i>${product[i].amount}</li>
                      <li>${product[i].previous_price}</li>
                      <li id="price">${product[i].price}</li>
                  </ul>
              </div>
          </div>
        </div>
        `;
    }
}

