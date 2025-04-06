function NonAlignedSearch() {

    function findPattern(numBytes, data) {
        if (data.length < 1 || numBytes !== data.length) {
            return -2;
        }
        const patternByteString = 0xFE6B2840.toString(2);

        let startingBitPosition = -1;
        let nonByteAlignedData = '';


        for (let index = 0; index < numBytes; index++) {
            if (startingBitPosition !== -1) {
                break;
            }
            const byte = (parseInt(data[index], 16)).toString(2);
            nonByteAlignedData += byte.padStart(8, '0');

            if (nonByteAlignedData.length >= patternByteString.length) {
                let byteDataLength = nonByteAlignedData.length;
                while (byteDataLength >= patternByteString.length && startingBitPosition === -1) {
                    const nonBytePattern = nonByteAlignedData.substring(byteDataLength - patternByteString.length, byteDataLength);
                    if (nonBytePattern === patternByteString) {
                        startingBitPosition = byteDataLength - patternByteString.length;
                    }
                    byteDataLength -= 1;
                }
            }
        }
        return startingBitPosition;
    }

    return findPattern;
}

module.exports = NonAlignedSearch;