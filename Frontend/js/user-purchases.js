var user_cookie = 'user_name';
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
    url:'../../Backend/api/purchases.php?id='+`${getCookie(user_key)}`,
    method:'get',
    responseType:'json'
}).then(res => {
    console.log(res);
    purchasesCards(res.data);
}).catch(err => {
    console.error(err);
});

function purchasesCards(purchases){
    var purchase = Object.values(purchases);

    for(let i=0;i<purchase.length;i++){
        document.getElementById('purchases').innerHTML +=
        `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="card shadow bg-white rounded">
              <img src="${purchase[i].productImg}" class="card-img-top">
              <div class="card-body">
                  <ul>
                      <li>${purchase[i].product_description}</li>
                      <li id="business">
                         ${purchase[i].productBusiness}
                      </li>
                      
                      <li id="price">${purchase[i].productPrice}</li>
                      <li><p>Cantidad Comprada: ${purchase[i].amount}</p></li>
                  </ul>
                  
              </div>
          </div>
        </div>
        `;
    }
}