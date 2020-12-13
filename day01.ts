import { readFileSync } from 'fs';

const input = readFileSync('inputs/day01.txt', 'utf-8');

let sumTwo = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]]);
        } else {
            hashMap[sum - array[i]] = array[i];
        }
    }

    return results[0];
}

let sumThree = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (hashMap[array[j]]) {
                results.push([array[i], array[j], hashMap[array[j]]]);
            } else {
                hashMap[sum - array[i] - array[j]] = array[j];
            }
        }
    }

    return results[0];
}

// part 1
var part1 = sumTwo(input.split("\n"), 2020)
console.log("part1", part1[0] * part1[1])

// part 2
var part2 = sumThree(input.split("\n"), 2020)
console.log("part2", part2[0] * part2[1] * part2[2])