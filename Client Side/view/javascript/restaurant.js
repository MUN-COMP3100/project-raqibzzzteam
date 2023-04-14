const baseurl="http://localhost:3001";

function find(){
  fetch(`${baseurl}/restaurant`)
  .then(response=>response.json())
  .then((data)=>
  {
      loadList(data);
      console.log(data);
  });
}

function loadTable(data) {
    let table = document.getElementById("restaurant-list");
    table.innerHTML = "";
    let header = `<tr>
        <th>Name</th>
        <th>Cuisine</th>
        <th>Location</th>
        <th>Mood</th>
        <th>Rating</th>
        </tr>`;
        table.innerHTML += header;
        data.forEach((restaurant) => {
            let row = `<tr>
            <td>${restaurant.Name}</td>
            <td>${restaurant.Cuisine}</td>
            <td>${restaurant.Location}</td>
            <td>${restaurant.Mood}</td>
            <td>${restaurant.Rating}</td>
            </tr>`;
            table.innerHTML += row;
        });
}

function loadList(data){
  let table = document.getElementById("restaurant-list");
  table.innerHTML = "";
  let header = `<tr>
      <th>Name</th>
      </tr>`;
      table.innerHTML += header;
      data.forEach((restaurant) => {
          let row = `<tr>
          <td><a href="/Client Side/view/Pages/Restaurants/${restaurant.Name}.html">${restaurant.Name}</a></td>
          </tr>`;
          table.innerHTML += row;
      });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 10
    });
}

find();