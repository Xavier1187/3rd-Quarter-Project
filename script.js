function xavier() {
    var useruser = document.getElementById("useruser").value;
    var userpass = document.getElementById("userpass").value;
    
    if(useruser==""&&userpass==""){

        document.getElementById("errortext").innerHTML = "Error occurred. Please enter username and password.";
        console.log("Login error.");
    }
    if(useruser==""&&userpass!=""){

        document.getElementById("errortext").innerHTML = "Error occurred. Please enter username.";
        console.log("Login error. ");
    } 
    if(useruser!=""&&userpass==""){

        document.getElementById("errortext").innerHTML = "Error occurred. Please enter your password.";
        console.log("Login error.");
    }
    if(useruser!=""&&userpass!=""){

        document.getElementById("errortext").innerHTML = "";        
    }
}
