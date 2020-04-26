var users = [
    {
      name:"Eduardo",
      lastname:"Lopez",
      username:"Eduardo",
      email:"eduardolopezlainez2001@gmail.com",
      password:"asd.123",
      phone_number:"+504 9853-6822",
      sex:"male",
      img:"../img/client3.jpg"
    },
    {
      name:"Rosa",
      lastname:"Sanchez",
      username:"Rosa",
      email:"rosanchz@gmail.com",
      password:"asd.456",
      phone_number:"+504 9822-3689",
      sex:"female",
      img:"../img/client.svg"
    },
    {
      name:"Mario",
      lastname:"Fernandez",
      username:"Mafer",
      email:"mafer99@gmail.com",
      password:"asd.789",
      phone_number:"+504 3422-7681",
      sex:"male",
      img:"../img/client2.jpg"
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
            <i class="fas fa-user"> ${users[i].username}</i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="user">
            <a class="dropdown-item" href="user-profile.html"><i class="fas fa-user text-danger"></i>Perfil</a>
            <a class="dropdown-item" href="#"><i class="fas fa-heart text-danger"></i>Favoritos</a>
            <a class="dropdown-item" href="#"><i class="fas fa-cart-arrow-down text-danger text-danger"></i>Compras</a>
            <a class="dropdown-item" href="../index.html"><i class="fas fa-sign-out-alt text-danger"></i>Cerrar sesion</a>
          </div>
        </li>
        `;
        document.getElementById('profile-img').innerHTML =
        `
        <img src="${users[i].img}">
        <div class="file btn btn-lg btn-danger">
            Change Photo
            <input type="file" name="file">
        </div>
        `;
        document.getElementById('profile-header').innerHTML =
        `
        <h5>
            ${users[i].name} ${users[i].lastname}
        </h5>
        <h6>
            Web Developer and Designer
        </h6>
        <p class="proile-rating">RANKINGS : <span>8/10</span></p>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
            </li>
        </ul>
        `;

        document.getElementById('profile-username').innerHTML =
        `
        <p>${users[i].username}</p>
        `;
        document.getElementById('profile-name').innerHTML =
        `
        <p>${users[i].name}</p>
        `;
        document.getElementById('profile-email').innerHTML =
        `
        <p>${users[i].email}</p>
        `;
        document.getElementById('profile-phone').innerHTML =
        `
        <p>${users[i].phone_number}</p>
        `;


    }
}
