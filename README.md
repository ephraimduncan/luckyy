# Luckyy

![GitHub](https://img.shields.io/github/license/dephraiim/luckyy) ![npm](https://img.shields.io/npm/v/luckyy) ![Twitter Follow](https://img.shields.io/twitter/follow/dephraiim?style=social) ![GitHub followers](https://img.shields.io/github/followers/dephraiim?style=social)

A small utility library to expand on the random method of the default JavaScript Math object.

## Installation

You can install it in your project file and use it as a dependency.

```bash
npm i luckyy
```

## Usage

You can import it in your prpject using CommonJs Modules.

### Common Js

This mini utility contains two sections. One for whole numbers and the other for Decimals.

```js
// Use it on Whole Numbers
const Random = require("luckyy").random;

// Use with decimals
const DecRandom = require("luckyy").decRandom;
```

## Methods

### Real Numbers

| Method             | Use                                         | Parameters                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rand()`           | Return a single whole random number         | **limit** (optional) - The highest random number you can generate. Default is 10                                                                                                                                                                  |
| `randArray()`      | Return an array of whole random numbers     | **limit** (optional) - The highest random in the array. Default - 10 <br><br> **arrLen** (optional) - The length of the array. Default - 10                                                                                                       |
| `randArrayRange()` | Return an array of a range of whole numbers | **start** (required) - The lowest random number in the array <br><br> **limit** (required when less than **start**) - The highest random number in the array. Default - 10 <br><br> **arrLen** (optional) - The length of the array. Default - 10 |

### Decimal Numbers

| Method             | Use                                         | Parameters                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rand()`           | Return a single whole random number         | **dp** (optional) - Number of decimal places. Default - 3 <br><br> **limit** (optional) - The highest random number you can generate. Default is 10                                                                                                                                                                  |
| `randArray()`      | Return an array of whole random numbers     | **arrLen** (optional) - The length of the array. Default - 10<br><br> **dp** (optional) - Number of decimal places. Default - 3 <br><br> **limit** (optional) - The highest random in the array. Default - 10                                                                                                        |
| `randArrayRange()` | Return an array of a range of whole numbers | **start** (required) - The lowest random number in the array <br><br> **limit** (required when less than **start**) - The highest random number in the array. Default - 10 <br><br> **arrLen** (optional) - The length of the array. Default - 10 <br><br> **dp** (optional) - Number of decimal places. Default - 3 |

## Contributing

Please submit a pull request if you want to, I'll be glad to merge them

## License

[MIT](./LICENSE)
