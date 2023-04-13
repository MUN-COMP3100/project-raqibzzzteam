const baseurl="http://localhost:3001";

function find(){
    fetch(`${baseurl}/users`)
    .then(response=>response.json())
    .then((data)=>
    {
        loadList(data);
        console.log(data);
    });
  }

function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    fetch(`${baseurl}/users`)
    .then(response=>response.json())
    .then((data)=>
    {
        let user = data.find((user) => user.username === username && user.password === password);
        if (user) {
            console.log("Login successful");
            // Redirect to the homepage or the user's dashboard
        } else {
            console.log("Invalid username or password");
        }
    });
}

const loginbtn=document.getElementById("loginbtn");
loginbtn.addEventListener("click",login);