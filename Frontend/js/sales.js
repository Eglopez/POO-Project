var users = [
    {
      name:"Eduardo",
      lastname:"Lopez",
      username:"Eduardo",
      email:"eduardolopezlainez2001@gmail.com",
      password:"asd.123",
      phone_number:"+504 9853-6822",
      sex:"male",
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
        name:"Balon de futbol",
        prom:"Balon de futbol de la mejor calidad",
        previous_price:"L.300",
        price:"L.95",
        img: "../img/Pelota.jpg",
        amount:"30 disponibles"
        },
        {
        name: "Muebles",
        prom: "Los mejores muebles para tu hogar",
        previous_price:"L.30,000",
        price:"L.26,455",
        img: "../img/mueble.jpg",
        amount: 30
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
      name:"Rosa",
      lastname:"Sanchez",
      username:"Rosa",
      email:"rosanchz@gmail.com",
      password:"asd.456",
      phone_number:"+504 9822-3689",
      sex:"female",
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
            name:"Balon",
            prom:"Balon de futbol de la mejor calidad",
            previous_price:"L.300",
            price:"L.95",
            img: "../img/Pelota.jpg",
            amount:"15 dsponibles"
          },
          {
          name:"Balon de futbol",
          prom:"Balon de futbol de la mejor calidad",
          previous_price:"L.300",
          price:"L.95",
          img: "../img/Pelota.jpg",
          amount:"30 disponibles"
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
      name:"Mario",
      lastname:"Fernandez",
      username:"Mafer",
      email:"mafer99@gmail.com",
      password:"asd.789",
      phone_number:"+504 3422-7681",
      sex:"male",
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
          name:"Balon de futbol",
          prom:"Balon de futbol de la mejor calidad",
          previous_price:"L.300",
          price:"L.95",
          img: "../img/Pelota.jpg",
          amount:"30 disponibles"
          },
          {
          name: "Muebles",
          prom: "Los mejores muebles para tu hogar",
          previous_price:"L.30,000",
          price:"L.26,455",
          img: "../img/mueble.jpg",
          amount: 30
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
    }
  ];


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
      document.getElementById('sales').innerHTML = '';
      for(let j=0;j<users[i].products.length;j++){
        document.getElementById('sales').innerHTML +=
    
        `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" id="cards">
          <div class="card shadow bg-white rounded">
              <img src="${users[i].products[j].img}" class="card-img-top">
              <div class="card-body">
                  <ul>
                      <li>${users[i].products[j].prom}</li>
                     
                      <li><i class="fas fa-tags"></i>${users[i].products[j].amount}</li>
                      <li>${users[i].products[j].previous_price}</li>
                      <li id="price">${users[i].products[j].price}</li>
                      <li>Comprado</li>
                  </ul>
              </div>
          </div>
        </div>
        `;
          
      }
    }
}   

  
