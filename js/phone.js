function updatePhoneNumber (isIncrease){
    const phoneField = document.getElementById('phone-field');
    const phoneFieldString = phoneField.value;
    const previousPhoneFieldTotal = parseInt(phoneFieldString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneFieldTotal + 1;
    }
    else{
        newPhoneNumber = previousPhoneFieldTotal - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}

function phonePrice (newPhoneNumber){
    const newPhonePrice = newPhoneNumber * 1219;
    const newPhoneElement = document.getElementById('phone-price');
    newPhoneElement.innerText = newPhonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber =  updatePhoneNumber(true);

    phonePrice(newPhoneNumber);

    // calculate total
   subTotalPrice();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber =  updatePhoneNumber(false);

    phonePrice(newPhoneNumber);

    subTotalPrice();
})

