const baseurl="http://localhost:3001";

function find_name(){
    let Name=document.getElementById("search-bar").value;
    console.log(Name);
    fetch(`${baseurl}/restaurant/${Name}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchnamebtn=document.getElementById("searchnamebtn");
searchnamebtn.addEventListener("click",find_name);

function find_mood(){
    let mood=document.getElementById("search-bar").value;
    console.log(mood);
    fetch(`${baseurl}/restaurant/${mood}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchmoodbtn=document.getElementById("searchmoodbtn");
searchmoodbtn.addEventListener("click",find_mood);


function find_cuisine(){
    let cuisine=document.getElementById("search-bar").value;
    console.log(cuisine);
    fetch(`${baseurl}/restaurant/${cuisine}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchcuisinebtn=document.getElementById("searchcuisinebtn");
searchcuisinebtn.addEventListener("click",find_cuisine);

function find_rating(){
    let rating=document.getElementById("search-bar").value;
    console.log(rating);
    fetch(`${baseurl}/restaurant/${rating}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchratingbtn=document.getElementById("searchratingbtn");
searchratingbtn.addEventListener("click",find_rating);



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
        let row = `<tr>
        <td>${data.Name}</td>
        <td>${data.Cuisine}</td>
        <td>${data.Location}</td>
        <td>${data.Mood}</td>
        <td>${data.Rating}</td>
        </tr>`;
        table.innerHTML += row;
    }

