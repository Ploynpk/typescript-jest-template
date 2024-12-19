"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("../src/components/example");
describe('add function', () => {
    test('adds two numbers', () => {
        expect((0, example_1.add)(2, 3)).toBe(5);
    });
});
