var emailBox,passBox
function loginMain(){
    console.log("Login Active Main")
    emailBox=document.getElementById('email')
    passBox=document.getElementById('pass')
    console.log(passBox)
}

function validateUser(){
    let email=emailBox.value
    let pass=passBox.value
    console.log(email+"dd"+pass)
    if(email=="admindeepa@wipro.com"&&pass=="admin"){
        localStorage.setItem('isAdmin',true)
        alert("login sucess,click to redirect")
        window.location.href = "mainPage.html";
    }else{
        localStorage.setItem('isAdmin',false)
        alert("Credentials are invalid!!")
        emailBox.value=""
        passBox.value=""
    }
}
setTimeout(loginMain,0)