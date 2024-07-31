var email="Madmax007@gamil.cm";
var pwd=123456;
var userTypingemail="Madmax007@gamil.com";
var userTypingpwd=123456;
if(userTypingemail == email )
{
    if(userTypingpwd==pwd){
        console.log("Welcome");
    }
    else{
        console.log("User mail is correct & password incorrect");
    }
}
else{
    console.log("your email is incorrect");
}