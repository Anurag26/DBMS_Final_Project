//Check for Authentication status
auth.onAuthStateChanged(user =>{
    console.log(user);
    if(user){
        console.log(user);
    }
    else{
        console.log("User is not logged in");
    }
});

//Elements
const email = document.getElementById('text-email');
const password = document.getElementById('text-password');
const loginButton = document.getElementById('btn-login');
const signUpButton = document.getElementById('btn-SignUp');
const logOutButton = document.getElementById('btn-LogOut');
const googleSignInButton = document.getElementById('btn-google');

//Add signup event
signUpButton.addEventListener("click",function () {
    const emailvalue =  email.value;
    const passwordvalue =  password.value;

    auth.createUserWithEmailAndPassword(emailvalue,passwordvalue);
});

//logout
logOutButton.addEventListener("click",function () {
   auth.signOut();
});

//login
loginButton.addEventListener("click",function () {
    const emailvalue =  email.value;
    const passwordvalue =  password.value;
    auth.signInWithEmailAndPassword(emailvalue,passwordvalue);
});

//google login button
googleSignInButton.addEventListener("click",function () {
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function (result) {
       console.log(result);
   }).catch(function (e) {
       throw e;
   });
});





