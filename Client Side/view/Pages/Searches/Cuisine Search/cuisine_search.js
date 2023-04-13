const baseurl="http://localhost:3001";

function find_cuisine(){
    let cuisine=document.getElementById("search-bar").value;
    console.log(cuisine);
    fetch(`${baseurl}/restaurant/cuisine/${cuisine}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchcuisinebtn=document.getElementById("searchcuisinebtn");
searchcuisinebtn.addEventListener("click",find_cuisine);

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