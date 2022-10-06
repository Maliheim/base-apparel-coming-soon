let form = document.getElementById("inputform");
let inputbox = document.getElementById("inputbox");
let button = document.getElementById("submitbtn");

let eformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

let errorTracker = false;

let contactList = []
errorTracker = false;

let addContact = (email) => {contactList.push(email)};

let submit = (e) => {
    e.preventDefault()
    console.log(inputbox.value)

if(eformat.test(inputbox.value)){
    addContact(inputbox.value)
    input.value = ""
    error.style.display = "none"
    errorTracker = false;
    console.log(contactList)
}else{
    let err = document.createElement("p")
    err.id = "err"
    err.innerHTML = "Please provide a valid email"
    input.insertAdjacentElement
}}

console.log(inputbox.value)