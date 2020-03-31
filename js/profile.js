var users = [
    {
      name:"Eduardo",
      lastname:"Lopez",
      username:"Eduardo Lopez",
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
console.log(document.cookie);

document.getElementById('usernames').innerHTML = '';
for(let i=0;i<users.length;i++){
    if(users[i].username == document.cookie){
        console.log("hola :v");
        document.getElementById('usernames').innerHTML = 
        `
        <li class="nav-item dropdown" id="user-name">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user">${users[i].username}</i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
            <a class="dropdown-item" href="user-profile.html"><i class="fas fa-user text-danger"></i>Perfil</a>
            <a class="dropdown-item" href="#"><i class="fas fa-heart text-danger"></i>Favoritos</a>
            <a class="dropdown-item" href="#"><i class="fas fa-cart-arrow-down text-danger text-danger"></i>Compras</a>
            <a class="dropdown-item" href="../index.html"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
          </div>
        </li>
        `;

    }
}
