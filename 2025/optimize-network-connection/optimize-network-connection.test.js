const OptimizeNetworkConnection = require("./optimize-network-connection");


const Case1Data = `3
1 2 2
5 2 4`; //expect 6

function processData(input) {

    const [n, center, destination] = input.split("\n");
    const getMinDistance = OptimizeNetworkConnection();
    const minDistance = getMinDistance(center.split(' '), destination.split(' '));
    console.log(minDistance);
    return minDistance;
}

function TestOptimizeNetworkConnection() {

    const testCases = [
        { input: Case1Data, expected: 6 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });

}

TestOptimizeNetworkConnection()