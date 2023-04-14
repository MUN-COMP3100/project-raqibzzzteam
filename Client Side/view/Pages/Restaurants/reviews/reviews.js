const baseurl = "http://localhost:3001";

function find(){
    fetch(`${baseurl}/restaurant`)
    .then(response=>response.json())
    .then((data)=>
    {
        loadList(data);
        console.log(data);
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

  find();