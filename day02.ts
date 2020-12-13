import { readFileSync } from 'fs';

const input = readFileSync('inputs/day02.txt', 'utf-8');
const array = input.split("\n")

var part1 = 0
var part2 = 0
for (let i = 0; i < array.length; i++) {
    const l = array[i].split(" ")
    const word = l[2]
    const policy = l[0].split("-")
    const letter = l[1].replace(":", "")

    const occurrences = word.split(l[1].replace(":", "")).length - 1
    if (occurrences >= Number(policy[0]) && occurrences <= Number(policy[1])) {
        part1++
    }

    if (
        (word[Number(policy[0]) - 1] === letter && word[Number(policy[1]) - 1] !== letter) ||
        (word[Number(policy[0]) - 1] !== letter && word[Number(policy[1]) - 1] === letter)
     ) {
        part2++
    }
}

console.log("part1", part1)
console.log("part2", part2)