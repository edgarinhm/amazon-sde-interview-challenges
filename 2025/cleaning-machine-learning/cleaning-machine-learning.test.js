const CleaningMachineLearning = require("./cleaning-machine-learning");

const Case1Data = `ouio
2
4`; // expect 6

const Case2Data = `aaabca
3
2`; // expect 7

const Case3Data = `xxch
5
5`; // expect 10


function processData(input) {

    const [dataset, x, y] = input.split("\n");
    const cleanupDataset = CleaningMachineLearning();
    const totalCost = cleanupDataset(dataset, Number(x), Number(y));
    console.log(totalCost);
    return totalCost;
}


function TestCleaningMachineLearning() {

    const testCases = [
        { input: Case1Data, expected: 6 },
        { input: Case2Data, expected: 7 },
        { input: Case3Data, expected: 10 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });

}

TestCleaningMachineLearning();