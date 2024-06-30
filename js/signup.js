const nameInput = document.querySelector ( "#name");
const emailInput = document.querySelector ( "#email");
const passInput = document.querySelector ( "#pass");
const button = document.querySelector ( "#btn");

button.addEventListener('click',
(e)=>{
    e.preventDefault();
    const nameValue=nameInput.value;
    const emailValue=emailInput.value;
    const passValue=passInput.value;
    const user = {
     name: nameValue,
     email:emailValue,
     password: passValue,
    };
    console.log(user);
    const userJson = JSON.stringify(user);
    console.log(userJson);
    localStorage.setItem("user", userJson);
    alert("Success");
    // window.location.href = "./index.html"
})
    

