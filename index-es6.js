import RecursiveIterator from 'recursive-iterator';
import delObjectPath from 'del-object-path';
import objectMerge from 'object-merge';

export default function recursiveOmitBy(object, callback) {
  const results = objectMerge({}, object);

  for (let meta of new RecursiveIterator(object)) {
    const shouldOmit = callback(meta);

    if (shouldOmit) {
      delObjectPath(results, meta.path.join('.'));
    }
  }

  return results;
}
