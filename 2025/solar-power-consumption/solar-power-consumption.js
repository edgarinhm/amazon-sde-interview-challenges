function SolarPowerConsumption() {
    function getMaxSolar(bulbs) {
        const n = bulbs.length;
        let count = 0;

        // Create a copy of the string as a character array since strings are immutable in JavaScript
        let bulbsArray = bulbs.split('');

        // Count the existing solar panels ('1's)
        for (const c of bulbsArray) {
            if (c === '1') {
                count++;
            }
        }

        // Check each position for potential placement
        for (let i = 0; i < n; i++) {
            if (bulbsArray[i] === '0') {
                let canReplace = true;

                // Check left neighbor if exists
                if (i > 0 && bulbsArray[i - 1] === '1') {
                    canReplace = false;
                }

                // Check right neighbor if exists
                if (i < n - 1 && bulbsArray[i + 1] === '1') {
                    canReplace = false;
                }

                // Replace if possible
                if (canReplace) {
                    bulbsArray[i] = '1';
                    count++;
                }
            }
        }

        return count;
    }

    return getMaxSolar;
}