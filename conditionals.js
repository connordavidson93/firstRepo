//this is a boolean variable
var levelLocked = true;
//number of times a user can enter password
var attempts = 3;

//declares a function
function PasswordPrompt() {

    var myPassword = prompt("Enter password");

    //this tests if myPassword is a certain string
    //also tests for the nuber of login attempts
    if (myPassword == "ou812" && attempts > 0) {
        //if true this changes the boolean to false
        levelLocked = false;
    } else {
        //decreases attempts
        if (attempts > 0){
           attempts--; 
           PasswordPrompt();
        }
    }
}
//calls the function
PasswordPrompt()
//this will test if levelLocked is true or false
if (levelLocked) {
    alert("This level is locked.");
} else {
    alert("The level is unlocked.");
}