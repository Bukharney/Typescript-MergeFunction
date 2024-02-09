export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  let i = 0;
  let j = 0;
  let result: number[] = [];

  // Merge collection1 and collection2
  while (i < collection1.length && j < collection2.length) {
    // If collection1[i] < collection2[j], push collection1[i] to result and increment i
    if (collection1[i] < collection2[j]) {
      result.push(collection1[i]);
      i++;

      // If collection1[i] >= collection2[j], push collection2[j] to result and increment j
    } else {
      result.push(collection2[j]);
      j++;
    }
  }

  // Push the remaining elements of collection1 and collection2 to result
  while (i < collection1.length) {
    result.push(collection1[i]);
    i++;
  }

  while (j < collection2.length) {
    result.push(collection2[j]);
    j++;
  }

  // Merge result and collection3
  i = 0;
  let k = collection3.length - 1;

  // Insert collection3[k] into result
  while (k >= 0) {
    // If result[i] < collection3[k], increment i
    if (result[i] < collection3[k]) {
      i++;
      // If result[i] >= collection3[k], insert collection3[k] into result and decrement k
    } else {
      result.splice(i, 0, collection3[k]);
      k--;
    }
  }

  return result;
}

console.log(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
