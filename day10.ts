import { readFileSync } from "fs";

const input = readFileSync("inputs/day10.txt", "utf-8")
    .trim()
    .split("\n")
    .map(x => +x);

input.push(0);
input.push(Math.max(...input) + 3);
input.sort((a, b) => a - b);

const d = {};
const w = new Array(input.length).fill(0);
w[0] = 1;

for (let i = 0; i < input.length; i++) {
    // part1
    const diff = input[i] - input[i-1]
    d[diff] = (d[diff] || 0) + 1;

    // part2
    for (let j = i + 1; j < input.length; ++j) {
        if (input[j] - input[i] > 3) break;
        w[j] += w[i];
    }
}

console.log("part1", d["1"] * d["3"]);
console.log("part2", w[w.length - 1]);