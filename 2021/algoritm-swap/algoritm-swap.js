function AlgoritmSwap(n, arr) {
    const howManySwaps = (n, arr) => {
        let swapCount = 0;
        for (let index = 0; index < n; index++) {
            for (let jIndex = index + 1; jIndex < n; jIndex++) {
                if (arr[jIndex] < arr[index]) {
                    // swap arr[index] and arr[jIndex]
                    const iValue = arr[index];
                    arr[index] = arr[jIndex];
                    arr[jIndex] = iValue;
                    swapCount++;
                }
            }
        }
        return swapCount;
    }
    return howManySwaps;
}

module.exports = AlgoritmSwap;