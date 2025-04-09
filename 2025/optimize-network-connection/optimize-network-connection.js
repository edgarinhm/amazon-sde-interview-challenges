function OptimizeNetworkConnection() {
    function getMinDistance(center, destination) {
        center.sort((a, b) => a - b);
        destination.sort((a, b) => a - b);

        let minDistance = 0;
        for (let i = 0; i < center.length; i++) {
            minDistance += Math.abs(center[i] - destination[i]);
        }

        return minDistance;
    }

    return getMinDistance;
}

module.exports = OptimizeNetworkConnection;
