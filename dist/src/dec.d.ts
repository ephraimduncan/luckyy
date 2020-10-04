declare const DecRandom: {
    /**
     * Function to convert an float to a specific number of decimal places
     */
    dec(num: number, decimal: number): number;
    /**
     * Return a random decimal number with a specified decimal place
     */
    rand(dp?: number, limit?: number): number;
    /**
     * Return an array of random decimal numbers
     * with a specified number of decimal places
     */
    randArray(arrLen?: number, dp?: number, limit?: number): Number[];
    /**
     * Return an array of range of specified random decimal numbers
     * with a specified number of decimal places
     */
    randArrayRange(start: number, limit: number, arrLen?: number, dp?: number): Number[];
};
export default DecRandom;
