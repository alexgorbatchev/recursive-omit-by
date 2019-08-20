import RecursiveIterator from 'recursive-iterator';
import delObjectPath from 'del-object-path';
import merge from 'lodash.merge';

export default function recursiveOmitBy(object, callback, ...recursiveIteratorOpts) {
  let results;

  for (let meta of new RecursiveIterator(object, ...recursiveIteratorOpts)) {
    const shouldOmit = callback(meta);

    if (shouldOmit) {
      if (!results) {
        results = merge({}, object);
      }

      delObjectPath(results, meta.path.join('.'));
    }
  }

  return results;
}
