var users = [
    {
      name:"Eduardo",
      lastname:"Lopez",
      username:"Eduardo",
      email:"eduardolopezlainez2001@gmail.com",
      password:"asd.123",
      phone_number:"+504 9853-6822",
      sex:"male"
    },
    {
      name:"Rosa",
      lastname:"Sanchez",
      username:"Rosa",
      email:"rosanchz@gmail.com",
      password:"asd.456",
      phone_number:"+504 9822-3689",
      sex:"female"
    },
    {
      name:"Mario",
      lastname:"Fernandez",
      username:"Mafer",
      email:"mafer99@gmail.com",
      password:"asd.789",
      phone_number:"+504 3422-7681",
      sex:"male"
    }
  ];
  
  var business = [
    {
      name:"Jetstereo",
      acrony:"JS",
      email:"jetstereo@gmail.com",
      adress:"Col.Centroamerica",
      longitud_latitude:"15° 38°",
      country:"Honduras",
      state:"Francisco Morazan",
      zip_code:"11101",
      logo:"../img/1.jpg",
      img:"../img/jetstereo.jpeg",
      products:[
        {
          name:"Muebles",
          promo:"Los mejores muebles para tu hogar",
          amount:"15 unidades",
          previous_price:"L.30,000",
          price:"L.26,455",
          category:"Hogar",
          img:"../img/mueble.jpg"
        },
      ]
    },
    {
      name:"Pizza Hut",
      acrony:"PH",
      email:"pizzahut@gmail.com",
      adress:"Col.Centroamerica",
      longitud_latitude:"15° 38°",
      country:"Honduras",
      state:"Francisco Morazan",
      zip_code:"11101",
      logo:"../img/1.jpg",
      img:"../img/pizzahut.jpeg",
      products:[
        {
          name:"Pizza Hut chesee",
          promo:"15% de descuento dias Miercoles",
          amount:"200 unidades",
          previous_price:"L.500",
          price:"L.425",
          category:"Comida",
          img:"../img/pizza.jpg"
        },
      ]
    },
    {
      name:"Diunsa",
      acrony:"DS",
      email:"diunsa@gmail.com",
      adress:"Col.Centroamerica",
      longitud_latitude:"15° 38°",
      country:"Honduras",
      state:"Francisco Morazan",
      zip_code:"11101",
      logo:"../img/1.jpg",
      img:"../img/diunsa.jpeg",
      products:[
        {
          name:"Balon de futbol",
          promo:"Balon de futbol de la mejor calidad",
          amount:"120 unidades",
          previous_price:"L.200",
          price:"L.90",
          category:"Deportes",
          img:"../img/pelota.jpg"
        },
      ]
    }
  ];
  
  var categories = [
    {
        category:"Hogar",
        business:[
            {
                name:"Jetstereo",
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
                      name: "Muebles",
                      prom: "Los mejores muebles para tu hogar",
                      previous_price:"L.30,000",
                      price:"L.26,455",
                      img: "../img/mueble.jpg",
                      amount: 30
                    }
                    
                ]
            },
            {
                name: "Empresa 2",
                products:[
                    {
                        name: "Muebles",
                        prom: "Los mejores muebles para tu hogar",
                        previous_price:"L.30,000",
                        price:"L.26,455",
                        img: "../img/mueble.jpg",
                        amount: 50
                    },
                    {
                      name: "Muebles",
                      prom: "Los mejores muebles para tu hogar",
                      previous_price:"L.30,000",
                      price:"L.26,455",
                      img: "../img/mueble.jpg",
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
              name:"Balon",
              prom:"Balon de futbol de la mejor calidad",
              previous_price:"L.300",
              price:"L.95",
              img: "../img/Pelota.jpg",
              amount:"15 dsponibles"
            }
          ] 
  
        },
        {
          name: "Sports",
          products:[
            {
              name:"Balon de futbol",
              prom:"Balon de futbol de la mejor calidad",
              previous_price:"L.300",
              price:"L.95",
              img: "../img/Pelota.jpg",
              amount:"56 disponibles"
            },
            {
              name:"Balon",
              prom:"Balon de futbol de la mejor calidad",
              previous_price:"L.300",
              price:"L.95",
              img: "../img/Pelota.jpg",
              amount:"22 disponibles"
            }
          ]  
        }
      ]
    }
  ];

  function userValidation(){
    for(let i=0;i<users.length;i++){
      if(users[i].username==document.getElementById('username').value && users[i].password==document.getElementById('password').value){
        console.log(users[i]);
        document.cookie = encodeURIComponent(document.getElementById('username').value);
        console.log(document.cookie);
        homeUser();
        
        $('#loginModal').modal('hide');        
        
      }else{
        $('#loginModal').modal('show');
      }
    }
  }


function homeUser(){
    for(let i=0;i<users.length;i++){
      if(users[i].username==document.cookie){
        document.getElementById('btn-log').style.display = 'none';
        document.getElementById('name').innerHTML = `
        <li class="nav-item dropdown" id="user-name">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"> ${users[i].username}</i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
            <a class="dropdown-item" href="user-profile.html"><i class="fas fa-user text-danger"></i>Perfil</a>
            <a class="dropdown-item" href="#"><i class="fas fa-heart text-danger"></i>Favoritos</a>
            <a class="dropdown-item" href="sales.html"><i class="fas fa-cart-arrow-down text-danger text-danger"></i>Compras</a>
            <a class="dropdown-item" href="../index.html"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
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
                      <img src="${product.img}" class="card-img-top">
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
                  <div class="card shadow bg-white rounded">
                      <img src="${product.img}" class="card-img-top">
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
  }
homeUser();

function home(){
  for(let i=0;i<users.length;i++){
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
                  <img src="${product.img}" class="card-img-top">
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
                  <img src="${product.img}" class="card-img-top">
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
 home();