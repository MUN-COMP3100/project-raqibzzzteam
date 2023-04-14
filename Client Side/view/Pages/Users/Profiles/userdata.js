const baseurl="http://localhost:3001";

function info(){
    let name=document.getElementById("restaurant_name").innerText; 
    console.log(name); 
    fetch(`${baseurl}/users/${name}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadUserTable(data);
    });
}

function find(){
    fetch(`${baseurl}/restaurant`)
    .then(response=>response.json())
    .then((data)=>
    {
        loadTable(data);
        console.log(data);
    });
  }

function loadUserTable(data) {
    let table = document.getElementById("user_table");
    table.innerHTML = "";
    let header = `<tr>
        <th>Email</th>
        <th>Date Of Birth</th>
        </tr>`;
        table.innerHTML += header;
        let row = `<tr>
        <td>${data.Email}</td>
        <td>${data.DOB}</td>
        </tr>`;
        table.innerHTML += row;
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
            <td><a href="/Client Side/view/Pages/Restaurants/${restaurant.Name}.html">${restaurant.Name}</td>
            <td>${restaurant.Cuisine}</td>
            <td>${restaurant.Location}</td>
            <td>${restaurant.Mood}</td>
            <td>${restaurant.Rating}</td>
            </tr>`;
            table.innerHTML += row;
        });
}


info();
find();
