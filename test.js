import { expect } from 'chai';
import recursiveOmitBy from './index-es6';

describe('recursive-omit-by', () => {
  it('removes keys without side effects', () => {
    const input = {
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
    };
    const inputBackup = JSON.parse(JSON.stringify(input));
    const actual = recursiveOmitBy(input, ({ key, node }) => key === 'value' || node === 'hello');

    expect(inputBackup).to.deep.equal(input);
    expect(actual).to.eql({
      foo: {
        node1: true,
        node2: false,
        list: [
          { foo: 1 }
        ],
      },
    });
  });
});
