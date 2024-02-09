"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2, collection3) {
    var i = 0;
    var j = 0;
    var result = [];
    // Merge collection1 and collection2
    while (i < collection1.length && j < collection2.length) {
        // If collection1[i] < collection2[j], push collection1[i] to result and increment i
        if (collection1[i] < collection2[j]) {
            result.push(collection1[i]);
            i++;
            // If collection1[i] >= collection2[j], push collection2[j] to result and increment j
        }
        else {
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
    var k = collection3.length - 1;
    // Insert collection3[k] into result
    while (k >= 0) {
        // If result[i] < collection3[k], increment i
        if (result[i] < collection3[k]) {
            i++;
            // If result[i] >= collection3[k], insert collection3[k] into result and decrement k
        }
        else {
            result.splice(i, 0, collection3[k]);
            k--;
        }
    }
    return result;
}
exports.merge = merge;
console.log(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
