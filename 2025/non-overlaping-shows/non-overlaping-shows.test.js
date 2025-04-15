const NonOverlapingShows = require("./non-overlaping-shows");

const Case1Data = `1 4 1 6 6 8
3 5 5 9 7 9
2 2 5 3 1 1`; // expect 8

const Case2Data = `1 10 100
1 10 100
1 10 100`; // expect 111

const Case3Data = `1 3 3
5 6 1
8 12 5
3 8 10
14 17 13` //expect 23

function processData(input) {

    const [start, duration, volume] = input.split("\n");
    const maximumNonOverlapingVolume = NonOverlapingShows();
    const maxVolume = maximumNonOverlapingVolume(start.split(' ').map(value => Number(value)), duration.split(' ').map(value => Number(value)), volume.split(' ').map(value => Number(value)));
    console.log(maxVolume);
    return maxVolume;
}

function TestNonOverlapingShows() {

    const testCases = [
        { input: Case1Data, expected: 8 },
        { input: Case2Data, expected: 111 },
        { input: Case3Data, expected: 12 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = processData(input);
        console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
    });
}

TestNonOverlapingShows()