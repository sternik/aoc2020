import { readFileSync } from 'fs';

const input = readFileSync('inputs/day09.txt', 'utf-8').trim().split("\n").map(x => +x);

function test(n, arr) {
    return arr.some((item, i) => arr.slice(i + 1).includes(n - item))
}

let part1 = 0,
    part2 = 0;

for (let index = 25; index < input.length; index++) {
    if (!test(input[index], input.slice(index - 25, index))) {
        part1 = input[index];
    }
}

let a = 0,
    b = [],
    i = 0;
for (let index = 0; index < input.length; index++) {
    a += input[index];
    b.push(input[index])
    if (a === part1) {
        b.sort()
        part2 = b.shift() + b.pop()
        break
    }
    else if (a > part1) {
        a = 0
        b = []
        index = i++
    }
}

console.log("part1", part1);
console.log("part2", part2);