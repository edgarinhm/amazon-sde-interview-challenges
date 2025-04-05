const OrderConversions = require('./order-conversions');
const { Case1Data } = require('./order-mock-data');
const { OrderBatch } = require('./order-types');

function processData(input) {

    const data = input.split("\n");
    const [n, orderCount, ...serializedData] = data;
    const orderBatch = new OrderBatch();
    const deserializeOrder = OrderConversions();
    const deserializeData = deserializeOrder(parseInt(n), serializedData, parseInt(orderCount), orderBatch);
    console.log(deserializeData);
    return deserializeData;
}

function testOrderConversions() {
    const batch = {
        orderCount: 2,
        batchId: 5,
        orders: [

            {
                quantity: 10,
                orderId: 1,
                partNumber: [0x20, 0x10],
                emailAddress: "john@example.com"
            },
            {
                quantity: 20,
                orderId: 3,
                partNumber: [0x11, 0x22, 0x33],
                emailAddress: "bob@example.com"
            }

        ]
    };

    const testCases = [
        { input: Case1Data, expected: batch },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        const expect = `Conversion performed successfully, ${JSON.stringify(expected)} updated`;
        console.log(`Test case ${index + 1}: ${result === expect ? 'Passed' : 'Failed'}`);
    });
}

testOrderConversions();