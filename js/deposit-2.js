// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField= document.getElementById('deposit-field');
    const newDepositAmount= parseFloat(depositField.value);
   
    // step-3 clear depositField
    depositField.value= '';

    // step-4
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositAmount= parseFloat(depositTotalElement.innerText);

    // step-5 calculation (newDepositAmount + previousDepositAmount) the set up
    const currentDepositAmount= newDepositAmount + previousDepositAmount;

    // step- 6
    depositTotalElement.innerText= currentDepositAmount;
})