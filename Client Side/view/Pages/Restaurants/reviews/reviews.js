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

  find();