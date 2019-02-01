console.log('JS');

$(document).ready(onReady);

function onReady() {   
    $('#submitButton').on('click', submitButtonClick);






}//end document ready

function submitButtonClick(){
   let firstName = ($('#inputFirstName').val()); 
    let lastName = ($('#inputLastName').val());
    let employeeID = ($('#inputID').val());
    let employeeTitle = ($('#inputTitle').val());
    let annualSalary = ($('#inputAnnualSalary').val());
}