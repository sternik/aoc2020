import { readFileSync } from 'fs';

const input = readFileSync('inputs/day06.txt', 'utf-8').trim().split("\n\n");

let part1 = 0
input.forEach(group => {
    part1 += new Set(group.replace(/\n/g, "").split("")).size
});

let part2 = 0
for (let index = 0; index < input.length; index++) {
    const group = input[index].split("\n");

    var dict = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    })

    for (let index = 0; index < group.length; index++) {
        group[index].split("").forEach(element => {
            dict[element] += 1
        });
    }

    Object.keys(dict).map(function (key) {
        return dict[key];
    }).forEach(element => {
        if (element === group.length) {
            part2 += 1
        }
    });

}

console.log("part1", part1);
console.log("part2", part2);