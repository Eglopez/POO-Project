users = [
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
]

business = [
  {
    name:"Jetstereo",
    acrony:"JS",
    email:"jetstereo@gmail.com",
    adress:"Col.Centroamerica",
    longitud_latitude:"15° 38°",
    country:"Honduras",
    state:"Francisco Morazan",
    zip_code:"	11101",
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
  }
]











function showBusinessForm(){
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('businessForm').style.display = 'block';
}

function showUserForm(){
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('businessForm').style.display = 'none';
}

/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  }())