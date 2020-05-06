# recursive-omit-by

[![GratiPay](https://img.shields.io/gratipay/user/alexgorbatchev.svg)](https://gratipay.com/alexgorbatchev/)
![Downloads](https://img.shields.io/npm/dm/recursive-omit-by.svg)
![Version](https://img.shields.io/npm/v/recursive-omit-by.svg)

Deletes keys from the object that match a condition without side effects.

## Installation

```
npm install --save-dev recursive-omit-by
```

## Usage

```js
import recursiveOmitBy from 'recursive-omit-by';

recursiveOmitBy(
  {
    text: 'hello',
    foo: {
      node1: true,
      node2: false,
      list: [
        { more: 'hello', foo: 1 }
      ],
      string: 'hello',
      value: 1,
    },
  },
  ({ parent, node, key, path, deep }) => key === 'value' || node === 'hello'
);
// returns new object without modifying original
// {
//   foo: {
//     node1: true,
//     node2: false,
//     list: [
//       { foo: 1 }
//     ],
//   },
// }
```

## License

ISC
