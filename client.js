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
    totalMonthlyCost = totalMonthlyCost += (annualSalary/12);
    //display value on DOM
    $('#totalMonthlyCost').text(totalMonthlyCost);
    //clear inputs on click
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputTitle').val('');
    $('#inputAnnualSalary').val('');

    if (totalMonthlyCost >= 20000){
        $('#totalMonthlyCost').css('background-color', 'red');
    }
}// end submitButtonClick

