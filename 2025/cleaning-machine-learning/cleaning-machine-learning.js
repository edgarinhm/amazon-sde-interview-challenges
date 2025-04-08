function CleaningMachineLearning() {
    function cleanupDataset(dataset, x, y) {
        let datasetStack = dataset.split('');
        let totalCost = 0;
        let singleChar = [];

        if (dataset.match(/[A-Z 0-9]/g)) {
            return 'ERROR';
        }

        while (datasetStack.length > 0) {
            const char = datasetStack[0];
            const charMatch = datasetStack.filter((data) => data === char);
            if (charMatch.length > 1) {
                totalCost += Math.floor(charMatch.length / 2) * y
            } else {
                singleChar.push(...charMatch)
            }
            datasetStack = datasetStack.filter((data) => data !== char);
        }
        totalCost += Math.floor(singleChar.length / 2) * x;
        return totalCost;
    }

    return cleanupDataset;
}
module.exports = CleaningMachineLearning;