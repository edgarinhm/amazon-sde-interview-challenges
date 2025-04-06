function NonAlignedSearch() {

    function findPattern(numBytes, data) {
        if (data.length < 1 || numBytes !== data.length) {
            return -2;
        }

        let startingBitPosition = -1;

        for (const byte of data) {
            console.log('byte', byte)
        }

        return startingBitPosition;
    }

    return findPattern;
}

module.exports = NonAlignedSearch;