console.log('JS');

$(document).ready(onReady);

let totalMonthlyCost = 0;
let allEmployees = [];

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

    let newEmployee = new Employee(firstName, lastName, employeeID, employeeTitle, annualSalary);

    allEmployees.push(newEmployee);


    $('#employeeTableBody').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
            <td><button class="deleteButton-${employeeID}">Delete</button></td>
        </tr>    
    `);
    //add Salary input to totalMonthlyCost
    totalMonthlyCost = totalMonthlyCost + (annualSalary/12);
    
    //clear inputs on click
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputTitle').val('');
    $('#inputAnnualSalary').val('');

    updateTotalMonthlyCost();

    $(`.deleteButton-${employeeID}`).data('employeeMonthlySalary', annualSalary/12);
    $(`.deleteButton-${employeeID}`).on('click', deleteButtonClick);
}// end submitButtonClick

//create employee class 

class Employee {
    constructor(firstName, lastName, employeeID, employeeTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.employeeTitle = employeeTitle;
        this.annualSalary = annualSalary;
    }
}

function deleteButtonClick(){
    let deletedEmployeeMonthlySalary = $(this).data('employeeMonthlySalary');
    let deletedEmployee = $(this).parents('tr');
    deletedEmployee.remove();
    totalMonthlyCost = totalMonthlyCost - deletedEmployeeMonthlySalary;
    updateTotalMonthlyCost();
}//end deleteButtonClick

function updateTotalMonthlyCost() {
    $('#totalMonthlyCost').text(totalMonthlyCost);
    if (totalMonthlyCost >= 20000){
        $('#totalMonthlyCost').css('background-color', 'red');
    }
    else {
        $('#totalMonthlyCost').css('background-color', 'white');
    }
}

