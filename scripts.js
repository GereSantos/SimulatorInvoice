alert('Welcome to the Menu Invoce! \n' +
    'Let' + 's start to work!')

let chosen = window.prompt('Select a Operation for your about invoce \n' +
    '1 -  Generate Code Invoice \n' +
    '2 -  Print out \n' +
    '3 - New Invoice \n')


switch (chosen) {
    case '1':
        NumberInvoice()
        chosen
        break;
    case '2':
        printout()
        break;
    case '3':
        New()
        break;
    default:
        alert('Number Wrong!')
        break;
}

function NumberInvoice() {
    let Number = Math.random()
    alert('your invoice number is ' + Number)
}

function printout() {
    var today = new Date()
    var end = new Date(2022, 11, 05);
    alert('Your invoice number is ' + Number +
        'Due date ' + end)
}

function New() {
    alert('A new invoice will be sent to your email')
}