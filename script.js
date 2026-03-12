document.getElementById("appointmentForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let doctor=document.getElementById("doctor").value;
let date=document.getElementById("date").value;
let problem=document.getElementById("problem").value;

document.getElementById("message").innerText =
"Thank you "+name+"! Your appointment with "+doctor+
" has been successfully booked for "+date+
". Our team will review your concern: '"+problem+"' and get ready to assist you.";

});