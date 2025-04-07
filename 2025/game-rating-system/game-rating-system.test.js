const Case1Data = `4
4 5 9 7
4
1 2 3 4
2`; // skill[4 5 9 7], rating[1 2 3 4], k=2  expect  0 1 6 3

const Case2Data = `3
1 7 5
0 0 1
1`; // skill[1 7 5], rating[0 0 1], k=1  expect  0 1 0

const Case3Data = `4
1 2 3 4
40 30 20 10
2`; // skill[1 2 3 4], rating[40 30 20 10], k=2  expect  0 40 70 70