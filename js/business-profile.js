var business = [
    {
      name:"Jetstereo",
      acrony:"JS",
      email:"jetstereo@gmail.com",
      phone: "2227-6955",
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
      name:"Pizza-Hut",
      acrony:"PH",
      email:"pizzahut@gmail.com",
      phone: "2327-6995",
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
      phone: "2157-6975",
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

  for(let i=0;i<business.length;i++){
      if(business[i].name==document.cookie){
            document.getElementById('business-name').innerHTML =
            `
            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-building"> ${business[i].name}</i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
                      <a class="dropdown-item" href="business-profile.html"><i class="fas fa-users text-danger"></i>Perfil</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-shopping-bag text-danger"></i>Mis articulos</a>
                      <a class="dropdown-item" href="#"><i class="fas fa-shopping-cart text-danger"></i>Agregar Articulo</a>
                      <a class="dropdown-item" href="business-dashboard.html"><i class="fas fa-chart-line text-danger"></i>Dashboard</a>
                      <a class="dropdown-item" href="../index.html"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
                    </div>
              </li>
            `;

            document.getElementById('img-business').innerHTML =
            `<img src="${business[i].img}">`;
            document.getElementById('name-title').innerHTML =
            `<h5>${business[i].name}</h5>`;
            document.getElementById('nameb').innerHTML =
            `<p>${business[i].name}</p>`;
            document.getElementById('emailb').innerHTML =
            `<p>${business[i].email}</p>`;
            document.getElementById('phoneb').innerHTML =
            `<p>${business[i].phone}</p>`;
            document.getElementById('adressb').innerHTML =
            `<p>${business[i].adress}</p>`;
        }
    }