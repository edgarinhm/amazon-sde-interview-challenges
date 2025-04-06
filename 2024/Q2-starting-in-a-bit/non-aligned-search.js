function NonAlignedSearch() {

    function findPattern(numBytes, data) {
        if (data.length < 1 || numBytes !== data.length) {
            return -2;
        }

        const bytePattern = '0xFE6B2840';
        const pattern = bytePattern.substring(2, bytePattern.length);

        let patternArray = [];
        let patternIndex = 0;

        while (patternArray.length < ((bytePattern.length - 2) / 2)) {
            const byte = pattern.substring(patternIndex, patternIndex + 2);
            patternArray.push(parseInt(byte, 16));
            patternIndex += 2;
        }


        let startingBitPosition = -1;

        for (let index = 0; index < numBytes; index++) {
            for (let jIndex = index + 1; jIndex < numBytes - patternArray.length; jIndex++) {
                if (parseInt(data[index], 16) + '' + parseInt(data[jIndex], 16) + '' + parseInt(data[jIndex + 1], 16) + '' + parseInt(data[jIndex + 2], 16) == patternArray.join('')) {
                    startingBitPosition = index * 8;
                    break;
                }
            }
        }

        return startingBitPosition;
    }

    return findPattern;
}

// Convert an integer to a string made up of the bytes in network/big-endian order.
function htonlString(n) {
    // Mask off 8 bytes at a time then shift them into place
    return String.fromCharCode((n & 0xFF000000) >>> 24) +
        String.fromCharCode((n & 0x00FF0000) >>> 16) +
        String.fromCharCode((n & 0x0000FF00) >>> 8) +
        String.fromCharCode((n & 0x000000FF) >>> 0);
}
// Convert an integer to an array of "bytes" in network/big-endian order.
function htonl(n) {
    // Mask off 8 bytes at a time then shift them into place
    return [
        (n & 0xFF000000) >>> 24,
        (n & 0x00FF0000) >>> 16,
        (n & 0x0000FF00) >>> 8,
        (n & 0x000000FF) >>> 0,
    ];
}

module.exports = NonAlignedSearch;