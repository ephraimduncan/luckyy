declare const Random: {
    /**
     * Return a single whole random number
     * Up to a specific number if stated
     */
    rand(limit?: number): number;
    /**
     * Return an array of random numbers from 0 to 10
     * Up to a specific number if stated
     */
    randArray(limit?: number, arrLen?: number): Number[];
    /**
     * Return a set number of random numbers between a certain range Arrray
     */
    randArrayRange(start: Number, limit?: number, arrLen?: number): Number[];
};
export default Random;
