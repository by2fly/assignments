var form = document.getElementById("airline-form");
var submit = document.getElementByID("submit");
var query = document.querySelector;

function formAlert() {
    e.preventDefault()
    let firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = []
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
}
let formA = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident.."`


submit.addEventListener("click", formAlert);

