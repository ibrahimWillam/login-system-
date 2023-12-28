var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput = document.getElementById("nameInput");
var emailInputLogin = document.getElementById("emailInput-login");
var passwordInputLogin = document.getElementById("passwordInput-login");

var userlist = [];
if (localStorage.getItem("users") !== null){
userlist = JSON.parse(localStorage.getItem("users"));}

function addUser(){
    var user={
        name : nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    }

    if(   validationName() == true && validationPassword() == true && validationEmail() == true                ){

    userlist.push(user);
    localStorage.setItem("users", (JSON.stringify(userlist)))

    clearUp() 
    displaySignin()
    }
}

function login(){

   
        var email=emailInputLogin.value
      var  password=passwordInputLogin.value

      if (userlist.length == null){document.getElementById("signinAlert").classList.remove("d-none")}
    
      else  if (testEmptyInput() == true ){
    for (var i=0 ; i<userlist.length ; i++ )
       
       if(email==userlist[i].email && password==userlist[i].password)
        {document.getElementById("username").innerHTML= userlist[i].name;
        document.getElementById("signup_Page").classList.add("d-none");
        document.getElementById("signin_Page").classList.add("d-none");
        document.getElementById("welcome-page").classList.remove("d-none");






        clearIn()

    
    }
        
        
        
        else{document.getElementById("signinAlert").classList.remove("d-none");}
    }
}



function displaySignin(){

    document.getElementById("signup_Page").classList.add("d-none");
    document.getElementById("welcome-page").classList.add("d-none");
    document.getElementById("signin_Page").classList.remove("d-none");
    document.getElementById("signinAlert").classList.add("d-none")

}

function displaySignup(){
    document.getElementById("signup_Page").classList.remove("d-none");

    document.getElementById("welcome-page").classList.add("d-none");
    document.getElementById("signin_Page").classList.add("d-none");
}


function testEmptyInput(){
    var email = emailInputLogin.value;
    var password = passwordInputLogin.value;
    if ( email == "" || password == "" || email == " " || password == " " )  {
        document.getElementById("emptyAlert").classList.remove("d-none")
        return false
    }
    else{
        document.getElementById("emptyAlert").classList.add("d-none")
        return true

    }
}

function clearIn(){
    emailInputLogin.value= "";
    passwordInputLogin.value="";
}

function clearUp() {
    nameInput.value= "";
    emailInput.value="";
    passwordInput.value= "";
    nameInput.classList.remove("is-valid")
    nameInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid")
    emailInput.classList.remove("is-invalid")
    passwordInput.classList.remove("is-invalid")
    passwordInput.classList.remove("is-valid")


}

function validationEmail(){
    var term = emailInput.value
    var regxtext = /^[\w]{2,15}(\@)[A-z]{3,10}(.com)$/

    if(regxtext.test(term)){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        document.getElementById("emailAlert").classList.add("d-none")
        return true
}else{
    emailInput.classList.remove("is-valid")
    emailInput.classList.add("is-invalid")
    document.getElementById("emailAlert").classList.remove("d-none")
    return false}
}



function validationPassword(){
    var term = passwordInput.value
    var regxtext = /^[\w]{4,20}$/

    if(regxtext.test(term)){
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        document.getElementById("passwordAlert").classList.add("d-none")
        return true
}else{
    passwordInput.classList.remove("is-valid")
    passwordInput.classList.add("is-invalid")
    document.getElementById("passwordAlert").classList.remove("d-none")
    return false}
}

function validationName(){
    var term = nameInput.value
    var regxtext = /^[\w]{3,10}$/

    if(regxtext.test(term)){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        document.getElementById("nameAlert").classList.add("d-none")
        return true
}else{
    nameInput.classList.remove("is-valid")
    nameInput.classList.add("is-invalid")
    document.getElementById("nameAlert").classList.remove("d-none")
    return false}
}