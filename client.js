console.log('JS');

$(document).ready(onReady);

let totalMonthlyCost = 0;

function onReady() {   
    $('#submitButton').on('click', submitButtonClick);
    $('#totalMonthlyCost').append(totalMonthlyCost);
}//end document ready

function submitButtonClick(){
    let firstName = ($('#inputFirstName').val()); 
    let lastName = ($('#inputLastName').val());
    let employeeID = ($('#inputID').val());
    let employeeTitle = ($('#inputTitle').val());
    let annualSalary = Number($('#inputAnnualSalary').val());
    $('#employeeTableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
        </tr>    
    `);
    //add Salary input to totalMonthlyCost
      totalMonthlyCost = totalMonthlyCost += annualSalary;
    //display value on DOM
      $('#totalMonthlyCost').text(totalMonthlyCost);
    //clear inputs on click
  

}// end submitButtonClick

