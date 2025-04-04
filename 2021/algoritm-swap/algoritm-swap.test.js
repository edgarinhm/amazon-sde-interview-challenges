const AlgoritmSwap = require('./algoritm-swap');
const { Case1Data, Case2Data, Case3Data, Case4Data } = require('./algoritm-mock-data');

function processData(input) {
    const data = input.split("\n").map((item) => parseInt(item, 10));
    const [n, ...arr] = data;
    const howManySwaps = AlgoritmSwap();
    const swapCount = howManySwaps(n, arr);
    console.log(swapCount);
    return swapCount;
}

function testAlgoritmSwap() {
    const testCases = [
        { input: Case1Data, expected: 2 },
        { input: Case2Data, expected: 0 },
        { input: Case3Data, expected: 0 },
        { input: Case4Data, expected: 4 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });
}

testAlgoritmSwap();