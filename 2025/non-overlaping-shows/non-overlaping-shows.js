function NonOverlapingShows() {
    function maximumNonOverlapingVolume(start, duration, volume) {
        const sortedIntervals = start.map((initialStart, index) => {
            return { start: initialStart, end: initialStart + duration[index], duration: duration[index], volume: volume[index], index: index };
        }).sort((a, b) => a.end - b.end);

        const dynamicPrograming = new Array(sortedIntervals.length).fill(0);
        dynamicPrograming[0] = sortedIntervals[0].volume;
        for (let index = 1; index < sortedIntervals.length; index++) {
            dynamicPrograming[index] = sortedIntervals[index].volume;
            for (let jIndex = 0; jIndex < index; jIndex++) {
                if (sortedIntervals[jIndex].end <= sortedIntervals[index].start) {
                    dynamicPrograming[index] = Math.max(dynamicPrograming[index], dynamicPrograming[jIndex] + sortedIntervals[index].volume);
                }
            }
        }
        return Math.max(...dynamicPrograming);
    }

    return maximumNonOverlapingVolume

}

module.exports = NonOverlapingShows;