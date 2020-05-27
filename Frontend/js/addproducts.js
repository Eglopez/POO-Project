var business_cookie = 'name';
var id_cookie = 'key';


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
                <a class="dropdown-item" href="add-products.html"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
                <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
                <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
              </div>
        </li>
      `;
    }
}  

function addProduct(){
    var img = document.getElementById('form-img');
    let product_name = document.getElementById('product-name').value;
    let formData = new FormData(img);
    formData.append('name-product',product_name);
    axios({
        url:'../../Backend/api/upload.php',
        method:'post',
        responseType:'json',
        data:formData
    }).then(res => {
        console.log(res.data);
        console.log(res);
        
        let product = {
            name:document.getElementById('product-name').value,
            description:document.getElementById('product-description').value,
            price:document.getElementById('product-price').value,
            previous_price:document.getElementById('product-previousprice').value,
            img:res.data,
            amount:document.getElementById('product-amount').value,
            category:document.getElementById('product-category').value
        }; 

       axios({
            url:'../../Backend/api/products.php/'+`?id=${getCookie(id_cookie)}`,
            method:'post',
            responseType:'json',
            headers:{'Content-Type':'multipart/form-data'},
            data:product
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        });
    }).catch(err => {
        console.error(err);
        
    })
}