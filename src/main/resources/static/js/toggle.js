var currentUserIndex = 1;
var userArray=[{"name": "John Doe","gender": "male","image":"img/john_doe.png"}, {"name": "Jane Doe","gender": "female","image":"img/jane_doe.png"}];
function toggleUser(){
    currentUserIndex = 1 - currentUserIndex;
    let nextUser = userArray[currentUserIndex];
    displayUser(nextUser);
}
function displayUser(user){
   // console.log(user);
   document.getElementById("userImage").src = user.image;
   document.getElementById("userName").textContent = user.name;
   document.getElementById("userGender").textContent = user.gender;
}