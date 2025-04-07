const OrderSecurity = require("./order-security");

const Case1Data = `4
4 5 6 7`; //expect 04

const Case2Data = `4
1 2 3 4` //expect 82

function processData(input) {

    const [n, ...data] = input.split("\n");
    const findNumber = OrderSecurity();
    const encriptedNumber = findNumber(data[0].split(' ').map(number => Number(number)));
    console.log(encriptedNumber);
    return encriptedNumber;
}

function TestOrderSecurity(params) {

    const testCases = [
        { input: Case1Data, expected: '04' },
        { input: Case2Data, expected: '82' },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });

}

TestOrderSecurity();