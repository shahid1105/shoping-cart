function phoneAndCaseTotal (elementId){
    const phoneAndCaseTotalElement = document.getElementById(elementId);
    const totalPriceElementString = phoneAndCaseTotalElement.innerText;
    const totalPriceElement = parseInt(totalPriceElementString);
    return totalPriceElement;
}

function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function subTotalPrice(){
    const currentPhoneTotal = phoneAndCaseTotal('phone-price');
    const currentCaseTotal = phoneAndCaseTotal('case-price');

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubtotal);

    // calculate tex
    const textAmountString = (currentSubtotal * 0.1).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setTextElementById('text-amount', textAmount);

    // calculate final amount
    const finalAmount = currentSubtotal + textAmount;
    setTextElementById('final-total', finalAmount);
}