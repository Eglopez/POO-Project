var user_cookie = 'user_name';
var business_cookie = 'name';
var user_key = 'key';  
  
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
          img: "../img/playstation.jpg",
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
          img: "../img/smartphones.jpg",
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
},
  
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
      headers: {'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' },
      data:form_data
    }).then(res=>{
      console.log(res);
      $('#loginModal').modal('hide'); 
      homeUser();
      
    }).catch(err =>{
      console.error(err);
    });
  }

  function businessValidation(){
    axios({
      url:'../../Backend/api/login-business.php',
      method:'post',
      responseType:'json',
      headers:{'Content-Type':'multipart/form-data'},
      data:{
        name:document.getElementById('business-name').value,
        password:document.getElementById('business-password').value
      }
    }).then(res => {
      console.log(res);
      $('#loginModal').modal('hide');
      homeBusiness();
    }).catch(err => {
      console.error(err);
    });
  }

  function goSignup(){
    window.location.assign('../pages/signup.html');
  }

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
  



function homeUser(){
    
  if(getCookie(user_cookie)){
    document.getElementById('btn-log').style.display = 'none';
  document.getElementById('name').innerHTML = `
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
  document.getElementById('home').innerHTML = '';
  for(let j=0;j<categories.length;j++){
    if(categories[j].category == 'Hogar'){
      for(let k=0;k<categories[j].business.length;k++){
        var busi = categories[j].business[k];
        for(let l=0;l<busi.products.length;l++){
          var product = busi.products[l];
          document.getElementById('home').innerHTML +=
          `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                <img src="${product.img}" class="card-img-top" height="300">
                <div class="card-body">
                    <ul>
                        <li>${product.prom}</li>
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
    }else if(categories[j].category == 'Deportes'){
      document.getElementById('sports').innerHTML='';
      for(let k=0;k<categories[j].business.length;k++){
        var busi = categories[j].business[k];
        
        for(let l=0;l<busi.products.length;l++){
          var product = busi.products[l];
          document.getElementById('sports').innerHTML +=
          `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                <img src="${product.img}" class="card-img-top" height="300">
                <div class="card-body">
                    <ul>
                        <li>${product.prom}</li>
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
    }else if(categories[j].category == 'Ropa'){
      document.getElementById('ropa').innerHTML='';
      for(let k=0;k<categories[j].business.length;k++){
        var busi = categories[j].business[k];
        
        for(let l=0;l<busi.products.length;l++){
          var product = busi.products[l];
          document.getElementById('ropa').innerHTML +=
          `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                <img src="${product.img}" class="card-img-top" heigth="300">
                <div class="card-body">
                    <ul>
                        <li>${product.prom}</li>
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
  }else if(categories[j].category == 'Tecnologia'){
    document.getElementById('tecnologia').innerHTML='';
    for(let k=0;k<categories[j].business.length;k++){
      var busi = categories[j].business[k];
      
      for(let l=0;l<busi.products.length;l++){
        var product = busi.products[l];
        document.getElementById('tecnologia').innerHTML +=
        `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
              <img src="${product.img}" class="card-img-top" height="300">
              <div class="card-body">
                  <ul>
                      <li>${product.prom}</li>
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
}

homeUser();
   


function home(){
  
    document.getElementById('sports').innerHTML='';
    document.getElementById('home').innerHTML = '';
    for(let j=0;j<categories.length;j++){
      if(categories[j].category == 'Hogar'){
        for(let k=0;k<categories[j].business.length;k++){
          var busi = categories[j].business[k];
          for(let l=0;l<busi.products.length;l++){
            var product = busi.products[l];
            document.getElementById('home').innerHTML +=
            `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card shadow bg-white rounded">
                  <img src="${product.img}" class="card-img-top" height="300">
                  <div class="card-body">
                      <ul>
                          <li>${product.prom}</li>
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
      }else if(categories[j].category == 'Deportes'){
        for(let k=0;k<categories[j].business.length;k++){
          var busi = categories[j].business[k];
          for(let l=0;l<busi.products.length;l++){
            var product = busi.products[l];
            document.getElementById('sports').innerHTML +=
            `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card shadow bg-white rounded">
                  <img src="${product.img}" class="card-img-top" height="300">
                  <div class="card-body">
                      <ul>
                          <li>${product.prom}</li>
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
      }else if(categories[j].category == 'Ropa'){
        document.getElementById('ropa').innerHTML='';
        for(let k=0;k<categories[j].business.length;k++){
          var busi = categories[j].business[k];
          
          for(let l=0;l<busi.products.length;l++){
            var product = busi.products[l];
            document.getElementById('ropa').innerHTML +=
            `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                  <img src="${product.img}" class="card-img-top" height="300">
                  <div class="card-body">
                      <ul>
                          <li>${product.prom}</li>
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
    }else if(categories[j].category == 'Tecnologia'){
      document.getElementById('tecnologia').innerHTML='';
      for(let k=0;k<categories[j].business.length;k++){
        var busi = categories[j].business[k];
        
        for(let l=0;l<busi.products.length;l++){
          var product = busi.products[l];
          document.getElementById('tecnologia').innerHTML +=
          `
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                <img src="${product.img}" class="card-img-top" height="300">
                <div class="card-body">
                    <ul>
                        <li>${product.prom}</li>
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

 home();

 function homeBusiness(){

      if(getCookie(business_cookie)){
        document.getElementById('btn-log').style.display = 'none';
      document.getElementById('name').innerHTML = `
      <li class="nav-item dropdown" id="user-name">
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
      document.getElementById('home').innerHTML = '';
      for(let j=0;j<categories.length;j++){
        if(categories[j].category == 'Hogar'){
          for(let k=0;k<categories[j].business.length;k++){
            var busi = categories[j].business[k];
            for(let l=0;l<busi.products.length;l++){
              var product = busi.products[l];
              document.getElementById('home').innerHTML +=
              `
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="card shadow bg-white rounded">
                    <img src="${product.img}" class="card-img-top" height="300">
                    <div class="card-body">
                        <ul>
                            <li>${product.prom}</li>
                            <li id="business">
                               ${busi.name}
                            </li>
                            <li><i class="fas fa-tags"></i>${product.amount}</li>
                            <li>${product.previous_price}</li>
                            <li id="price">${product.price}</li>
                        </ul>
                    </div>
                </div>
              </div>
              `;
            }
          }
        }else if(categories[j].category == 'Deportes'){
          document.getElementById('sports').innerHTML='';
          for(let k=0;k<categories[j].business.length;k++){
            var busi = categories[j].business[k];
            
            for(let l=0;l<busi.products.length;l++){
              var product = busi.products[l];
              document.getElementById('sports').innerHTML +=
              `
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="card shadow bg-white rounded">
                    <img src="${product.img}" class="card-img-top" height="300">
                    <div class="card-body">
                        <ul>
                            <li>${product.prom}</li>
                            <li id="business">
                               ${busi.name}
                            </li>
                            <li><i class="fas fa-tags"></i>${product.amount}</li>
                            <li>${product.previous_price}</li>
                            <li id="price">${product.price}</li>
                        </ul>
                    </div>
                </div>
              </div>
              `;
            }
          }
        }else if(categories[j].category == 'Ropa'){
          document.getElementById('ropa').innerHTML='';
          for(let k=0;k<categories[j].business.length;k++){
            var busi = categories[j].business[k];
            
            for(let l=0;l<busi.products.length;l++){
              var product = busi.products[l];
              document.getElementById('ropa').innerHTML +=
              `
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                    <img src="${product.img}" class="card-img-top" height="300">
                    <div class="card-body">
                        <ul>
                            <li>${product.prom}</li>
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
      }else if(categories[j].category == 'Tecnologia'){
        document.getElementById('tecnologia').innerHTML='';
        for(let k=0;k<categories[j].business.length;k++){
          var busi = categories[j].business[k];
          
          for(let l=0;l<busi.products.length;l++){
            var product = busi.products[l];
            document.getElementById('tecnologia').innerHTML +=
            `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card shadow bg-white rounded" onclick="purchase('${product.img}' , '${busi.name}' , '${product.price}' , '${product.name}' , '${product.prom}')">
                  <img src="${product.img}" class="card-img-top" height="300">
                  <div class="card-body">
                      <ul>
                          <li>${product.prom}</li>
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
    }
  

 homeBusiness();


 function businessLogin(){
   document.getElementById('formlogin-user').style.display = 'none';
   document.getElementById('formlogin-business').style.display='block';
   document.getElementById('btnlogin-user').style.display = 'none';
   document.getElementById('btnlogin-business').style.display ='block';
 }

 function userLogin(){
  document.getElementById('formlogin-user').style.display = 'block';
  document.getElementById('formlogin-business').style.display='none';
  document.getElementById('btnlogin-user').style.display = 'block';
  document.getElementById('btnlogin-business').style.display ='none';
}

function purchase(img,business,price,name,description){
  $('#modalPurchases').modal('show');
  document.getElementById('purchases').innerHTML =`
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <img src="${img}" width="300" height="200"><br> 
          <h3 class="text-center">${business}</h3><br>
        </div>
        <div class="col-lg-6">
          <div class="col-lg-4">
            Cantidad A Solicitar : 
          </div><br>
          <div class="form-group">
              <input type="text" class="form-control" id="amount">    
          </div><br>
          <div class="col-lg-4">
              Forma de pago : 
          </div><br>
          <select class="custom-select" id="payment">
              <option value="Credito">Credito</option> 
              <option value="Debito">Debito</option>   
          </selecct>
        </div>
        <div class="row">
            <div class="col-lg-10 mr-auto">

            </div>
            <div class="col-lg-2"><br>
            <b>$ ${ price }</b>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    
    
`;

document.getElementById('footer-modal').innerHTML =`
        <button type="button" onclick="addPurchase('${img}','${business}','${price}','${name}','${description}')" 
        class="btn btn-danger">
        Comprar</button>`
        ;
 
}

function addPurchase(img,business,price,name,description){
  axios({
    url:'../../backend/api/purchases.php?id='+`${getCookie(user_key)}`,
    method:'post',
    responseType:'json',
    headers:{'Content-Type':'multipart/form-data'},
    data:{
      productName:name,
      productPrice:price,
      amount:document.getElementById('amount').value,
      payment:document.getElementById('payment').value,
      productImg:img,
      product_description:description,
      productBusiness:business
    }
  }).then(res => {
    $('#modalPurchases').modal('hide');
  }).catch(err => {
    console.log(err);
  });
}

  

   