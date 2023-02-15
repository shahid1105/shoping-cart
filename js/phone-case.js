function updateCase(isIncrease){
    const caseField = document.getElementById('case-input-field');
    const caseFieldString = caseField.value;
    const previousCaseFieldTotal = parseInt(caseFieldString);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseFieldTotal + 1;
    }
    else{
        newCaseNumber = previousCaseFieldTotal - 1;
    }
    caseField.value = newCaseNumber;
    return newCaseNumber;
}

function casePrice (newCaseNumber){
    const newCasePrice = newCaseNumber * 59;
    const newCaseElement = document.getElementById('case-price');
    newCaseElement.innerText = newCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCasePrice = updateCase(true);

    casePrice(newCasePrice);

    subTotalPrice();
    
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCasePrice = updateCase(false);

    casePrice(newCasePrice);

    subTotalPrice();

})