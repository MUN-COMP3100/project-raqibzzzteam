const baseurl = "http://localhost:3001";

function login() {
    event.preventDefault();
  const username = document.getElementById("username").value;
  fetch(`${baseurl}/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.Password);
        let tempusername = data.Username;
        let tempPass = data.Password;
      if (username === tempusername) {
        const password = document.getElementById("password").value;
        if (password === tempPass) {
          alert("Login successful");
          // code to redirect to home page or dashboard
          window.location.href = `/Client Side/view/Pages/Users/Profiles/${tempusername}.html`;
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("Login failed");
      }
    });
}

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", login);

/*function validate(){
    let data = document.getElementById("username").value;
    fetch(`${baseurl}/users/${data}`)
    .then(response=>response.json())
    .then((data)=>
    {
        //loadList(data);
        console.log(data);
        //let temp=data;
    });
    //var password = document.getElementById("password").value
    if ( username == "admin" && password == "user"){
        alert("Login Successful")
    }
    else{
        alert("Login Failed")
    }
}*/