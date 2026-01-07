function checkLogin(){
           var name = document.getElementById("username").value
           var password = document.getElementById("password").value
           var errorMsg = document.getElementById("error-msg")
           if(name=="" || password==""){
                errorMsg.innerText = "Please fill the field"
                errorMsg.style.color = "red"
                return false 
            }
            if(password.length < 6){
                errorMsg.innerText = "Password must be 6 characters"
                return false
           }

           errorMsg.textContent = "Login Successfull"
           errorMsg.style.color="green"
           return false
}
        