let password = prompt ("enter your password");
let link =(password.length);
if (link == 8){
    console.log ("Welcome");
}else if (link <= 8 ){
    console.log ("Password is too short");
}else if (link >= 8){
    console.log("Password should be 8 characters");
}else {
    console.log("Please provide a password");
}