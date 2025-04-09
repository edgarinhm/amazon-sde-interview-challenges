const ListItemPrefixSufix = require("./list-item-prefix-sufix");


const Case1Data = `abbcac
1`; //expect 2

const Case2Data = `adbccdbada
2`; //expect 4

const Case3Data = `wxyzzyxw
1`; //expect 5

function processData(input) {

    const [categories, k] = input.split("\n");
    const splitPrefixSuffix = ListItemPrefixSufix();
    const minDistance = splitPrefixSuffix(categories, Number(k));
    console.log(minDistance);
    return minDistance;
}

function TestOptimizeNetworkConnection() {

    const testCases = [
        { input: Case1Data, expected: 2 },
        { input: Case2Data, expected: 4 },
        { input: Case3Data, expected: 5 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });

}

TestOptimizeNetworkConnection()