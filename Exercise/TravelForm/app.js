
travel.addEventListener('submit', function(e){ //checkbox
    e.preventDefault()
    let firstName=travel.firstName.value
    let lastName=travel.lastName.value
    let age=travel.age.value
    let choice=travel.choice.value
    let dest = travel.destination.value

    let dietaryChecked = []
    for (var i=0; i<travel.dietary.length; i++){
        if(travel.dietary[i].checked){
            dietaryChecked.push(travel.dietary[i].value)
        }
    }  
    let notice = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${choice}\nDestination: ${dest}\nDietary Restriction: ${dietaryChecked}`
    alert(notice)
    })

    