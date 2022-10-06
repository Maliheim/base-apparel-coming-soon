let form = document.getElementById("inputform");
let inputbox = document.getElementById("inputbox");
let button = document.getElementById("submitbtn");
let eformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

let errorTracker = false;

let contactList = [];
errorTracker = false;

let addContact = (email) => {
  contactList.push(email);
};

let submit = (event) => {
  event = event || window.event;
  event.preventDefault();
  console.log(inputbox.value);

  if (eformat.test(inputbox.value)) {
    addContact(inputbox.value);
    input.value = "";
    let error = document.getElementById("err");
    error.style.display = "none";
    errorTracker = false;
    console.log(contactList);
  } else {
    if (!errorTracker) {
      let err = document.createElement("p");
      err.id = "err";
      err.innerHTML = "Please provide a valid email";
      input.insertAdjacentElement;
    }
  }
};
console.log(contactList);
