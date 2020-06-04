var user_cookie = 'user_name';
var business_cookie = 'name';

var categories = [
    {
        category:"Hogar",
        business:[
            {
                name:"Diunsa",
                products:[
                    {
                        name: "Muebles",
                        prom: "Los mejores muebles para tu hogar",
                        previous_price:"L.30,000",
                        price:"L.26,455",
                        img: "../img/mueble.jpg",
                        amount: 25
                    },
                    {
                      name: "Sofa",
                      prom: "Los mejores muebles para tu hogar",
                      previous_price:"L.30,000",
                      price:"L.26,455",
                      img: "../img/sofa.jpg",
                      amount: 30
                    }
                    
                ]
            },
            {
                name: "Empresa X",
                products:[
                    {
                        name: "Mesa",
                        prom: "Los mejores muebles para tu hogar",
                        previous_price:"L.30,000",
                        price:"L.28,450",
                        img: "../img/table.jpg",
                        amount: 50
                    },
                    {
                      name: "Estante",
                      prom: "Los mejores muebles para tu hogar",
                      previous_price:"L.38,000",
                      price:"L.33,000",
                      img: "../img/estante.jpg",
                      amount: 43
                  }
                ]
            },
  
        ]
    },
    {
      category: "Deportes",
      business:[
        {
          name: "Diunsa",
          products:[
            {
              name:"Balon de futbol",
              prom:"Balon de futbol de la mejor calidad",
              previous_price:"L.300",
              price:"L.95",
              img: "../img/Pelota.jpg",
              amount:"30 disponibles"
            },
            {
              name:"Raqueta de Tenis",
              prom:"Lo mejor para el tenies",
              previous_price:"L.3000",
              price:"L.2,335",
              img: "../img/tenis.jpeg",
              amount:"15 dsponibles"
            }
          ] 
  
        },
        {
          name: "Sports",
          products:[
            {
              name:"Tacos de Futbol",
              prom:"Futbol",
              previous_price:"L.4,000",
              price:"L.2,225",
              img: "../img/tenis.jpg",
              amount:"56 disponibles"
            },
            {
              name:"Camisa",
              prom:"Atletico de Madrid",
              previous_price:"L.300",
              price:"L.95",
              img: "../img/camisa.jpg",
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
  

 


function homeCategory(){
 
  
        if(getCookie(user_cookie)){
            document.getElementById('btn-log').style.display = 'none';
            document.getElementById('category-title').innerHTML = '';
            document.getElementById('categories').innerHTML='';
            document.getElementById('name').innerHTML = `
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
            
            category();
        
        }
    }
    homeCategory();




function homeBusinessCategory(){
 
    
        if(getCookie(business_cookie)){
            document.getElementById('btn-log').style.display = 'none';
            document.getElementById('category-title').innerHTML = '';
            document.getElementById('categories').innerHTML='';
            document.getElementById('name').innerHTML = `
            <li class="nav-item dropdown" id="user-name">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-building"> ${getCookie(business_cookie)}</i>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
                <a class="dropdown-item" href="business-profile.html"><i class="fas fa-users text-danger"></i>Perfil</a>
                <a class="dropdown-item" href="#"><i class="fas fa-shopping-bag text-danger"></i>Mis articulos</a>
                <a class="dropdown-item" href="#"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
                <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
                <a class="dropdown-item" href="../../Backend/class/logout.php"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
              </div>
            </li>
            `;

            category();
            
        
        }
    }
    homeBusinessCategory();




function category(){
  document.getElementById('categories').innerHTML = '';
    for(let j=0;j<categories.length;j++){
        if(categories[j].category == 'Hogar'){
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
    
    