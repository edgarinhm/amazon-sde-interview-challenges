function OrderSecurity() {
    function findNumber(numbers) {
        let numberStack = [...numbers];

        while (numberStack.length > 2) {
            let reducedStack = [];
            for (let index = 0; index < numberStack.length - 1; index++) {
                reducedStack.push(((numberStack[index] % 10) + (numberStack[index + 1] % 10)) % 10);
            }
            numberStack = reducedStack;
        }
        return `${numberStack[0]}${numberStack[1]}`;
    }

    return findNumber;
}

module.exports = OrderSecurity;