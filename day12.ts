import { readFileSync } from "fs";

const input = readFileSync("inputs/day12.txt", "utf-8")
    .trim()
    .split("\n");

let dx = 0;
let dy = 0;
let directions = [
    [0, 1], // N
    [1, 0], // S
    [0, -1], // E
    [-1, 0], // W
];
let direction = 0;

for (let index = 0; index < input.length; index++) {
    const element = input[index]
    const action = element[0]
    const value = parseInt(element.substr(1), 10);

    switch (action) {
        case "F":
            dx += directions[direction][0] * value;
            dy += directions[direction][1] * value;
            break;
        case "N":
            dx -= value;
            break;
        case "S":
            dx += value;
            break;
        case "E":
            dy += value;
            break;
        case "W":
            dy -= value;
            break;
        case "L":
            direction -= value / 90;
            direction += 40;
            direction %= 4;
            break;
        case "R":
            direction += value / 90;
            direction %= 4;
            break;
    }
}

console.log("part1:", Math.abs(dx) + Math.abs(dy));
