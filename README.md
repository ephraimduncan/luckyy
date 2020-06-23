# Luckyy

![GitHub](https://img.shields.io/github/license/dephraiim/luckyy) ![npm](https://img.shields.io/npm/v/luckyy) ![Twitter Follow](https://img.shields.io/twitter/follow/dephraiim?style=social) ![GitHub followers](https://img.shields.io/github/followers/dephraiim?style=social)

A small utility library to expand on the random method of the default JavaScript Math object.

## Installation

You can install it in your project file and use it as a dependency.

```bash
npm install luckyy
```

## Usage

You can import it in your prpject using CommonJs Modules.

### Common Js

This mini utility contains two sections. One for whole numbers and the other for Decimals.

```js
// Destructuring the main object.

const { randReal, randDec } = require("luckyy");

// randReal for whole numbers
// randDec for decimal numbers
```

## Methods

### Real Numbers

| Method             | Use                                         | Parameters                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rand()`           | Return a single whole random number         | **limit** (optional) - The highest random number you can generate. Default is 10                                                                                                                                                          |
| `randArray()`      | Return an array of whole random numbers     | **limit** (optional) - The highest random in the array. Default - 10 <br> **arrLen** (optional) - The length of the array. Default - 10                                                                                                   |
| `randArrayRange()` | Return an array of a range of whole numbers | **start** (required) - The lowest random number in the array <br> **limit** (required when less than **start**) - The highest random number in the array. Default - 10 <br> **arrLen** (optional) - The length of the array. Default - 10 |

### Decimal Numbers

| Method             | Use                                         | Parameters                                                                                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rand()`           | Return a single whole random number         | **dp** (optional) - Number of decimal places. Default - 3 <br> **limit** (optional) - The highest random number you can generate. Default is 10                                                                                                                                                          |
| `randArray()`      | Return an array of whole random numbers     | **arrLen** (optional) - The length of the array. Default - 10<br> **dp** (optional) - Number of decimal places. Default - 3 <br> **limit** (optional) - The highest random in the array. Default - 10                                                                                                    |
| `randArrayRange()` | Return an array of a range of whole numbers | **start** (required) - The lowest random number in the array <br> **limit** (required when less than **start**) - The highest random number in the array. Default - 10 <br> **arrLen** (optional) - The length of the array. Default - 10 <br> **dp** (optional) - Number of decimal places. Default - 3 |

## Contributing

Please submit a pull request if you want to, I'll be glad to merge them

## License

[MIT](./LICENSE)
