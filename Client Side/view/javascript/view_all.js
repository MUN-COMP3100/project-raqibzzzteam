const baseurl="http://localhost:3001";

function find(){
  fetch(`${baseurl}/restaurant`)
  .then(response=>response.json())
  .then((data)=>
  {
      loadTable(data);
      console.log(data);
  });
}

function loadTable(data) {
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

find();