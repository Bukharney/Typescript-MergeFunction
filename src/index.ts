export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  let i = 0;
  let j = 0;
  let k = collection3.length - 1;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      collection3[k--] = collection1[i++];
    } else {
      collection3[k--] = collection2[j++];
    }
  }

  while (i < collection1.length) {
    collection3[k--] = collection1[i++];
  }

  while (j < collection2.length) {
    collection3[k--] = collection2[j++];
  }

  return collection3;
}
