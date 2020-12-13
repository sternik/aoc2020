import { readFileSync } from 'fs';

const input = readFileSync('inputs/day03.txt', 'utf-8').trim().split("\n");

let slope = input.map((item) => {
    return item.split("");
});

function slide(right: number, down: number) {
    let jump = slope[0].length;
    let rowIndex = 0;
    let columnIndex = 0;
    let treeCount = 0;

    while (rowIndex < slope.length - 1) {
        let futureChar = slope[rowIndex + down][columnIndex + right];
        if (!futureChar) {
            columnIndex -= jump;
        }

        rowIndex += down;
        columnIndex += right;
        let char = slope[rowIndex][columnIndex];

        if (char === "#") {
            treeCount++;
        }
    }
    return treeCount;
}

let a = slide(1, 1);
let b = slide(3, 1);
let c = slide(5, 1);
let d = slide(7, 1);
let e = slide(1, 2);

console.log("part1", b);
console.log("part2", a * b * c * d * e);