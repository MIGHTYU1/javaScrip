var voterAge=()=>{
    age=100;
    aadhar=0;
    if(age>=18){
        console.log("ok, You May Go");
        if(aadhar>=1){
            console.log("Ok your Aadhar is verified with your age");
        }else{
            console.log("You Age and Aadhar Age Mismatched");
        }
    }else{
        console.log("Your Age is Below 18, Not Allowed")
    }
}
voterAge();