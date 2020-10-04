const Random = {
  /**
   * Return a single whole random number
   * Up to a specific number if stated
   */
  rand(limit = 10) {
    return Math.floor(Math.random() * limit);
  },

  /**
   * Return an array of random numbers from 0 to 10
   * Up to a specific number if stated
   */
  randArray(limit = 10, arrLen = 10) {
    let randArr: Number[] = [];
    for (let i = 0; i < arrLen; i++) {
      randArr.push(Random.rand(limit));
    }
    return randArr;
  },

  /**
   * Return a set number of random numbers between a certain range Arrray
   */
  randArrayRange(start: Number, limit = 10, arrLen = 10) {
    const arr = (): Number[] => {
      let randArr: Number[] = [];
      for (let i = 0; i < arrLen; i++) {
        let randInt = Random.rand(limit);
        if (randInt > start) {
          randArr.push(randInt);
        }
      }

      return randArr.length < arrLen ? arr() : randArr;
    };

    try {
      return arr();
    } catch (RangeError) {
      throw new Error("Call Stack Full. Retry Again");
    }
  },
};

export = Random;
