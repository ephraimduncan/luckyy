"use strict";
const DecRandom = {
    /**
     * Function to convert an float to a specific number of decimal places
     */
    dec(num, decimal) {
        return Number(String(num).slice(0, 2 + decimal));
    },
    /**
     * Return a random decimal number with a specified decimal place
     */
    rand(dp = 3, limit = 10) {
        return DecRandom.dec(Math.random() * limit, dp);
    },
    /**
     * Return an array of random decimal numbers
     * with a specified number of decimal places
     */
    randArray(arrLen = 10, dp = 3, limit = 10) {
        let randArr = [];
        for (let i = 0; i < arrLen; i++) {
            randArr.push(DecRandom.rand(dp, limit));
        }
        return randArr;
    },
    /**
     * Return an array of range of specified random decimal numbers
     * with a specified number of decimal places
     */
    randArrayRange(start, limit, arrLen = 10, dp = 3) {
        const arr = () => {
            let randArr = [];
            for (let i = 0; i < arrLen; i++) {
                let randInt = DecRandom.rand(dp, limit);
                if (randInt > start) {
                    randArr.push(randInt);
                }
            }
            return randArr.length < arrLen ? arr() : randArr;
        };
        try {
            return arr();
        }
        catch (RangeError) {
            throw new Error("Call Stack Full. Retry Again");
        }
    },
};
module.exports = DecRandom;
