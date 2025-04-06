const NonAlignedSearch = require('./non-aligned-search');
const { Case1Data, Case2Data } = require('./non-aligned-search-mock-data');

function processData(input) {

    const data = input.split("\n");
    const findPattern = NonAlignedSearch();
    const pattern = findPattern(data.length, data);
    console.log(pattern);
    return pattern;
}

function testNonAlignedSearch() {
    const testCases = [
        { input: Case1Data, expected: 16 },
        { input: Case2Data, expected: 15 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });
}

testNonAlignedSearch();