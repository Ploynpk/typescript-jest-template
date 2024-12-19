"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTs = testTs;
function testTs(arr, num) {
    const result = [];
    for (const number of arr) {
        result.push(number * num);
    }
    return result;
}
const arr = [1, 2, 3, 4];
const num = 2;
console.log(testTs(arr, num));
