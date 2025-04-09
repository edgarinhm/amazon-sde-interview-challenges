function ListItemPrefixSufix() {
    function splitPrefixSuffix(categories, k) {
        const c = categories;
        const n = c.length;
        const cp = Array(n).fill(0);
        const cs = Array(n).fill(0);
        const ps = new Set();
        const ss = new Set();
        let res = 0;

        for (let i = 0; i < n; i++) {
            ps.add(c[i]);
            cp[i] = ps.size;
        }

        for (let i = n - 1; i >= 0; i--) {
            ss.add(c[i]);
            cs[i] = ss.size;
        }

        for (let i = 0; i < n - 1; i++) {
            if (cp[i] > k && cs[i + 1] > k) {
                res += 1;
            }
        }

        return res;
    }

    return splitPrefixSuffix;
}

module.exports = ListItemPrefixSufix;