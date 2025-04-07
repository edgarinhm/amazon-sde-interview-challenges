function GameRatingSystem() {
    function getRelativeRatings(skill, rating, k) {
        const n = skill.length;
        const players = [];
        const result = new Array(n).fill(0);

        // Create pairs of [skill, index]
        for (let i = 0; i < n; i++) {
            players.push([skill[i], i]);
        }

        // Sort players by skill
        players.sort((a, b) => a[0] - b[0]);

        // JavaScript doesn't have a built-in min heap, so we'll implement our own
        const minHeap = {
            values: [],
            push(val) {
                this.values.push(val);
                this.values.sort((a, b) => a - b);
            },
            pop() {
                return this.values.shift();
            },
            top() {
                return this.values[0];
            },
            size() {
                return this.values.length;
            }
        };

        let sum = 0;
        for (let i = 0; i < n; i++) {
            const currentIndex = players[i][1];
            const currentRating = rating[currentIndex];
            result[currentIndex] = sum;
            minHeap.push(currentRating);
            sum += currentRating;

            if (minHeap.size() > k) {
                sum -= minHeap.pop();
            }
        }

        return result;
    }

    return getRelativeRatings;
}