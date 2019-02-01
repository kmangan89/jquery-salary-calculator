console.log('JS');

$(document).ready(onReady);

let totalMonthlyCost = 0;

function onReady() {   
    $('#submitButton').on('click', submitButtonClick);
    $('#totalMonthlyCost').append(
        '<h3>' + 'Total Monthly Cost: $'+ totalMonthlyCost + '</h3>'
    );
}//end document ready

function submitButtonClick(){
    let firstName = ($('#inputFirstName').val()); 
    let lastName = ($('#inputLastName').val());
    let employeeID = ($('#inputID').val());
    let employeeTitle = ($('#inputTitle').val());
    let annualSalary = ($('#inputAnnualSalary').val());
    $('#employeeTableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
        </tr>    
    `);

    //clear inputs on click
   console.log('hello');

}// end submitButtonClick