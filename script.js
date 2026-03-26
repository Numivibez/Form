// function forms(event){
//     // event.preventDefault();
//     const input = document.querySelectorAll("input")
//     // console.log(input);

//     // TO CHECK IF FNAME AND LNAME ARE NOT EMPTY
//     if (input[0].value.trim() == "" || input[1].value.trim() == ""){
//         alert("Input your Name")
//         return;
//     };

//     // if (input[0].value == "" || input[1].value == ""){
//     //     alert( "");
//     //     return;
//     // };

//     // TO CHECK IF EMAILS IS IN CORRECT FORMART
//     if (!input[2].value.includes("@") || !input[2].value.includes(".")){
//         alert("This is not a valid email");
//         return;
//     };

//     if (input[4].value !== input[5].value){
//         alert("Password not Match");
//         return;
//     };

//     alert("Form submitted successfully!");
// };


const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", forms)
function forms(event){
    event.preventDefault();
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    if(fname.value.trim() === "" || lname.value.trim() === ""){
        alert("Input Your Name")
        return;
    }

    if (phone.value.trim() !== NaN){
        alert("Enter a Valid Phone Number");
        return;
    };

    if (!email.value.includes("@") || !email.value.includes(".")){
        alert("This is not a valid email");
        return;
    }

    if (password.value !== confirmPassword.value){
        alert("Password not Match");
        return;
    }

    alert("Form submitted successfully!");
}



// Wrap in DOMContentLoaded just to be 100% safe
// document.addEventListener("DOMContentLoaded", () => {
    
//     const myForm = document.getElementById("myForm");

//     // We attach the listener inside here
//     myForm.addEventListener("submit", function(event) {
//         // 1. Prevent the actual submission/refresh
//         event.preventDefault();

//         // 2. Grab elements
//         const fname = document.getElementById("fname");
//         const lname = document.getElementById("lname");
//         const email = document.getElementById("email");
//         const password = document.getElementById("password");
//         const confirmPassword = document.getElementById("confirm-password");
//         const errorBox = document.getElementById("error-box");

//         // 3. Reset Error Box (Optional but good practice)
//         errorBox.innerText = "";
//         errorBox.style.color = "red";

//         // 4. Validation Logic
//         if (fname.value.trim() === "" || lname.value.trim() === "") {
//             errorBox.innerText = "Please input your full name.";
//             return;
//         }

//         if (!email.value.includes("@") || !email.value.includes(".")) {
//             errorBox.innerText = "This is not a valid email.";
//             return;
//         }

//         if (password.value !== confirmPassword.value) {
//             errorBox.innerText = "Passwords do not match.";
//             return;
//         }

//         // 5. Success
//         alert("Form submitted successfully!");
//         // If you had a backend, you would use fetch() here
//     });
// });