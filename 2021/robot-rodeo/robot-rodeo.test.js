const RobotRodeo = require('./robot-rodeo');
const { Case1Data, Case2Data, Case3Data, Case4Data, Case5Data, Case6Data } = require('./robot-mock-data');

function processData(input) {
    const data = input.split("\n");
    const [n, ...commands] = data
    const robotRodeo = new RobotRodeo();
    const isInfiniteLoop = robotRodeo.doesCircleExist(parseInt(n), commands);
    console.log(isInfiniteLoop);
    return isInfiniteLoop;
}


function testCases() {
    function case1() {
        const robotRodeo = processData(Case1Data);
        if (robotRodeo?.length === 2 && robotRodeo[0] === 'NO' && robotRodeo[1] === 'YES') {
            console.log('Test Case 1 OK');
        } else {
            console.log('Test Case 1 FAIL should return [NO, YES]');
        }
    }
    function case2() {
        const robotRodeo = processData(Case2Data);
        if (robotRodeo?.length === 1 && robotRodeo[0] === 'NO') {
            console.log('Test Case 2 OK');
        } else {
            console.log('Test Case 2 FAIL should return [NO]');
        }
    }
    function case3() {
        const robotRodeo = processData(Case3Data);
        if (robotRodeo?.length === 1 && robotRodeo[0] === 'NO') {
            console.log('Test Case 3 OK');
        } else {
            console.log('Test Case 3 FAIL should return [NO]');
        }
    }

    function case4() {
        const robotRodeo = processData(Case4Data);
        if (robotRodeo?.length === 1 && robotRodeo[0] === 'YES') {
            console.log('Test Case 4 OK');
        } else {
            console.log('Test Case 4 FAIL should return [YES]');
        }
    }

    function case5() {
        const robotRodeo = processData(Case5Data);
        if (robotRodeo?.length === 1 && robotRodeo[0] === 'YES') {
            console.log('Test Case 5 OK');
        } else {
            console.log('Test Case 5 FAIL should return [YES]');
        }
    }

    function case6() {
        const robotRodeo = processData(Case6Data);
        if (robotRodeo?.length === 1 && robotRodeo[0] === 'YES') {
            console.log('Test Case 6 OK');
        } else {
            console.log('Test Case 6 FAIL should return [YES]');
        }
    }


    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    console.log('All test cases finished')
}

testCases();