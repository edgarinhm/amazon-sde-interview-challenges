function NonAlignedSearch() {

    function findPattern(numBytes, data) {
        if (data.length < 1 || numBytes !== data.length) {
            return -2;
        }
        const bytePatternString = 0xFE6B2840.toString(2);

        let startingBitPosition = -1;
        let nonByteAlignedData = '';


        for (let index = 0; index < numBytes; index++) {
            if (startingBitPosition !== -1) {
                break;
            }
            const byte = (parseInt(data[index], 16)).toString(2);
            nonByteAlignedData += byte.padStart(8, '0');

            if (nonByteAlignedData.length >= bytePatternString.length) {
                let byteDataLength = nonByteAlignedData.length;
                while (byteDataLength >= bytePatternString.length && startingBitPosition === -1) {
                    const subBytePattern = nonByteAlignedData.substring(byteDataLength - bytePatternString.length, byteDataLength);
                    if (subBytePattern === bytePatternString) {
                        startingBitPosition = byteDataLength - bytePatternString.length;
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