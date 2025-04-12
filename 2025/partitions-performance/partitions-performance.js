function PartitionsPerformance() {
    function getMaximumPartitions(performance) {
        // Write your code here
        const n = performance.length;

        let componentPerformance = performance[0];
        for (let index = 1; index < n; index++) {
            componentPerformance &= performance[index];
            if (componentPerformance === 0) {
                break;
            }
        }

        let partitionGroup = -1;
        let maxPartitionNumber
            = 0;

        for (let index = 0; index < n; index++) {
            partitionGroup &= performance[index];
            if (partitionGroup === componentPerformance) {
                partitionGroup = -1;
                maxPartitionNumber += 1;
            }
        }

        return maxPartitionNumber;
    }
    return getMaximumPartitions;
}

module.exports = PartitionsPerformance;