const baseurl = "http://localhost:3001";

function find(){
    let name=document.getElementById("restaurant_name").innerText;
    console.log(name);
    fetch(`${baseurl}/reviews/restaurant/${name}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadList(data);
    });
  }

  function display(){
    let name=document.getElementById("restaurant_name").innerText;
    fetch(`${baseurl}/restaurant/${name}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
    });
  }

  function loadList(data){
    let table = document.getElementById("result-list");
    table.innerHTML = "";
    let header = `<tr>
        <th>Review</th>
        </tr>`;
        table.innerHTML += header;
        let row = `<tr>
        <td>${data.Review}</td>
        </tr>`;
        table.innerHTML += row;
  }

  function loadTable(data) {
    let table = document.getElementById("result");
    table.innerHTML = "";
    let header = `<tr>
        <th>Cuisine</th>
        <th>Location</th>
        <th>Mood</th>
        <th>Rating</th>
        </tr>`;
        table.innerHTML += header;
        let row = `<tr>
        <td>${data.Cuisine}</td>
        <td>${data.Location}</td>
        <td>${data.Mood}</td>
        <td>${data.Rating}</td>
        </tr>`;
        table.innerHTML += row;
}

  find();
  display();