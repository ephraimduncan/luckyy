declare const index: {
    randReal: {
        rand(limit?: number): number;
        randArray(limit?: number, arrLen?: number): Number[];
        randArrayRange(start: Number, limit?: number, arrLen?: number): Number[];
    };
    randDec: {
        dec(num: number, decimal: number): number;
        rand(dp?: number, limit?: number): number;
        randArray(arrLen?: number, dp?: number, limit?: number): Number[];
        randArrayRange(start: number, limit: number, arrLen?: number, dp?: number): Number[];
    };
};
export = index;
