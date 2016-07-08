import RecursiveIterator from 'recursive-iterator';
import delObjectPath from 'del-object-path';
import objectMerge from 'object-merge';

export default function recursiveOmitBy(object, callback) {
  let results;

  for (let meta of new RecursiveIterator(object)) {
    const shouldOmit = callback(meta);

    if (shouldOmit) {
      if (!results) {
        results = objectMerge({}, object);
      }

      delObjectPath(results, meta.path.join('.'));
    }
  }

  return results;
}
