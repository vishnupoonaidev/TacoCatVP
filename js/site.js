function getValue(){

    document.getElementById("alert").classList.add("invisible")

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);
    
    // compare stings then display message

    testPalindrome(userString,revString);

}



//reverse the string
//logic function
function reverseString(userString){
    let revString = [];
   
    //format string
    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;

    userString=userString.replace(regex,"");

    //reverse a string using a for loop
    for (let index = userString.length -1; index >=  0; index--) {
       revString += userString[index];
    }
        return revString;
   }




   //function to compare and display the results of the Palindrome test

   function testPalindrome(userString,revString){

     if(userString == revString){

          //write message to the page
        document.getElementById("pamsg").innerHTML = "Well done! You entered a palindrome!";
        document.getElementById("msg").innerHTML = `your reversed string is: ${revString}`;

    //show the alert box
      document.getElementById("alert").classList.remove("invisible");

     }else{


        document.getElementById("pamsg").innerHTML = "oh no! You did not a palindrome!";
        document.getElementById("msg").innerHTML = `your reversed string is: ${revString}`;

        //show the alert box
        document.getElementById("alert").classList.remove("invisible");

     }



   }

///other ways of prfeorming this task 
function checkForPalindrome(userString){
    let revString = [];
    let returnObj = {};
   
    //format string
    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;

    userString=userString.replace(regex,"");

  for (let index = userString.length - 1; index >=0; index--) {
    revString += userString[index];
    
  }

  if(revString == userString){
    returnObj.msg = "Well done! you enetered a palindrome!"
  }else{
    returnObj.msg = "Oh you did not enter a palindrome!"
  }

returnObj.reversed = revString;

return returnObj;

}


function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `your phrase reversed is ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}
