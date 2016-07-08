import RecursiveIterator from 'recursive-iterator';
import delObjectPath from 'del-object-path';
import merge from 'lodash.merge';

export default function recursiveOmitBy(object, callback, ...recursiveIteratorOpts) {
  const results = merge({}, object);

  for (let meta of new RecursiveIterator(object, ...recursiveIteratorOpts)) {
    const shouldOmit = callback(meta);

    if (shouldOmit) {
      delObjectPath(results, meta.path.join('.'));
    }
  }

  return results;
}
