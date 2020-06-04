var user_cookie = 'user_name';
var business_cookie = 'name';


var categories = [
    {
        category:"Ropa",
        business:[
            {
                name:"Mendels",
                products:[
                    {
                        name: "Sueter",
                        prom: "Los Sueters mas calientes",
                        previous_price:"L.3,000",
                        price:"L.2,455",
                        img: "../img/sueter.jpg",
                        amount: 12
                    },
                    {
                      name: "Falda",
                      prom: "Para que luzcas hermosa",
                      previous_price:"L.500",
                      price:"L.450",
                      img: "../img/falda.jpg",
                      amount: 30
                    }
                    
                ]
            },
            {
                name: "Levis",
                products:[
                    {
                        name: "Jeans",
                        prom: "Jean comodos",
                        previous_price:"L.4,000",
                        price:"L.3,455",
                        img: "../img/jeans.jpg",
                        amount: 50
                    },
                    {
                      name: "Chaqueta",
                      prom: "Baroniles",
                      previous_price:"L.6,000",
                      price:"L.5,455",
                      img: "../img/chaquta.jpg",
                      amount: 43
                  }
                ]
            },
  
        ]
    },
    {
      category: "Tecnologia",
      business:[
        {
          name: "Google",
          products:[
            {
              name:"Playstation",
              prom:"Las consolas mas potentes",
              previous_price:"L.15,000",
              price:"L.13,000",
              img: "../img/playsation.jpg",
              amount:"30 disponibles"
            },
            {
              name:"Tv",
              prom:"Tv HD",
              previous_price:"L.35,000",
              price:"L.30,567",
              img: "../img/tv.jpg",
              amount:"15 dsponibles"
            }
          ] 
  
        },
        {
          name: "Samsung",
          products:[
            {
              name:"Smatphone",
              prom:"Siempre a tu lado",
              previous_price:"L.28,000",
              price:"L.22,000",
              img: "../img/smatphones.webp",
              amount:"56 disponibles"
            },
            {
              name:"Smartwatch",
              prom:"Reloj inteligente",
              previous_price:"L.3,500",
              price:"L.3,000",
              img: "../img/smatwatch.jpg",
              amount:"22 disponibles"
            }
          ]  
        }
      ]
    }
  ];

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

if(getCookie(business_cookie)){
    document.getElementById('name').innerHTML = `
    <li class="nav-item dropdown" id="user-name">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-building"> ${getCookie(business_cookie)}</i>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
        <a class="dropdown-item" href="business-profile.html"><i class="fas fa-users text-danger"></i>Perfil</a>
        <a class="dropdown-item" href="business-product.html"><i class="fas fa-shopping-bag text-danger"></i>Mis articulos</a>
        <a class="dropdown-item" href="add-product.html"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
        <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
        <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
      </div>
    </li>
    `;
}      

if(getCookie(user_cookie)){
    document.getElementById('name').innerHTML =
    `
    <li class="nav-item dropdown" id="user-name">
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

function category(){
    document.getElementById('categories').innerHTML = '';
  for(let j=0;j<categories.length;j++){
      if(categories[j].category == 'Ropa'){
          document.getElementById('category-title').innerHTML = `
          <h3>${categories[j].category}</h3>
          `;
          for(let k=0;k<categories[j].business.length;k++){
            var busi = categories[j].business[k];
            for(let l=0;l<busi.products.length;l++){
                var product = busi.products[l];
                document.getElementById('categories').innerHTML +=
                `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="card shadow bg-white rounded">
                      <img src="${product.img}" class="card-img-top" height="300">
                      <div class="card-body">
                          <ul>
                              <li>${product.name}</li>
                              <li id="business">
                                 ${busi.name}
                              </li>
                              <li><i class="fas fa-tags"></i>${product.amount}</li>
                              <li>${product.previous_price}</li>
                              <li id="price">${product.price}</li>
                              <li><i class="fas fa-cart-arrow-down text-danger"></i>Comprar</li>
                          </ul>
                      </div>
                  </div>
                </div>
                `;
      
              }
          }     
      }   
  
  }
}
category();