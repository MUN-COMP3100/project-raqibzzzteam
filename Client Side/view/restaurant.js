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
    // contentView.style.display = "block";
    let table = document.getElementById("resultTable");
    table.innerHTML = "";
    let header = `<tr>
        <th>Name</th>
        <th>Cuisine</th>
        <th>Location</th>
        <th>Mood</th>
        <th>Rating</th>
        </tr>`;
        table.innerHTML += header;
        let row = `<tr>
        <td>${data.Name}</td>
        <td>${data.Cuisine}</td>
        <td>${data.Location}</td>
        <td>${data.Mood}</td>
        <td>${data.Rating}</td>`;
        table.innerHTML += row;
}

function loadList(data){
  let table = document.getElementById("resultTable");
  table.innerHTML = "";
  let header = `<tr>
      <th>Name</th>
      </tr>`;
      table.innerHTML += header;
      let row = `<tr>
      <td>${data.Name}</td>`;
      table.innerHTML += row;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 10
    });
  }
  